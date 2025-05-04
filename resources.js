import { Character, Episode, Location } from "harperdb";

export class CharacterWithExternal extends Character {
  async get(query) {
    const localData = await super.get(query);
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const externalData = await res.json();
    return {
      local: localData,
      external: externalData.results,
    };
  }
}

export class LocationWithExternal extends Location {
  async get(query) {
    const localData = await super.get(query);
    const res = await fetch("https://rickandmortyapi.com/api/location");
    const externalData = await res.json();
    return {
      local: localData,
      external: externalData.results,
    };
  }
}

export class EpisodeWithExternal extends Episode {
  async get(query) {
    const localData = await super.get(query);
    const res = await fetch("https://rickandmortyapi.com/api/episode");
    const externalData = await res.json();
    return {
      local: localData,
      external: externalData.results,
    };
  }
}

export const tables = {
  Character: new CharacterWithExternal(),
  Location: new LocationWithExternal(),
  Episode: new EpisodeWithExternal(),
};
