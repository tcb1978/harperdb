import type { Query } from "harperdb";
import { tables } from "harperdb";
import { ExternalApiUrl } from "./app/enums";


type CombinedResult<T> = {
  local: T | null;
  external: any;
  error?: string;
};

async function fetchExternal(url: string): Promise<{ data: any; error?: string }> {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return { data: json.results };
  } catch (error) {
    return { data: null, error: (error as Error).message };
  }
}

class CharacterBase {
  async get(query: Query): Promise<any> {
    try {
      return await tables.Character.get(query);
    } catch (error) {
      return null;
    }
  }
}

class LocationBase {
  async get(query: Query): Promise<any> {
    try {
      return await tables.Location.get(query);
    } catch (error) {
      return null;
    }
  }
}

class EpisodeBase {
  async get(query: Query): Promise<any> {
    try {
      return await tables.Episode.get(query);
    } catch (error) {
      return null;
    }
  }
}

export class CharacterWithExternal extends CharacterBase {
  async get(query: Query): Promise<CombinedResult<any>> {
    let errorMsg: string | undefined = undefined;
    const localData = await super.get(query);
    const { data: externalData, error: externalError } = await fetchExternal(ExternalApiUrl.Character);
    if (externalError) errorMsg = `External error: ${externalError}`;
    return {
      local: localData,
      external: externalData,
      error: errorMsg,
    };
  }
}

export class LocationWithExternal extends LocationBase {
  async get(query: Query): Promise<CombinedResult<any>> {
    let errorMsg: string | undefined = undefined;
    const localData = await super.get(query);
    const { data: externalData, error: externalError } = await fetchExternal(ExternalApiUrl.Location);
    if (externalError) errorMsg = `External error: ${externalError}`;
    return {
      local: localData,
      external: externalData,
      error: errorMsg,
    };
  }
}

export class EpisodeWithExternal extends EpisodeBase {
  async get(query: Query): Promise<CombinedResult<any>> {
    let errorMsg: string | undefined = undefined;
    const localData = await super.get(query);
    const { data: externalData, error: externalError } = await fetchExternal(ExternalApiUrl.Episode);
    if (externalError) errorMsg = `External error: ${externalError}`;
    return {
      local: localData,
      external: externalData,
      error: errorMsg,
    };
  }
}

export const customTables = {
  Character: new CharacterWithExternal(),
  Location: new LocationWithExternal(),
  Episode: new EpisodeWithExternal(),
};