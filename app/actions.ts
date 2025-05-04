"use server";
import { CharacterType, EpisodeType, LocationType } from "./types";

export async function listCharacters(): Promise<CharacterType[]> {
  const { tables } = await import("harperdb");
  const characters: CharacterType[] = [];
  for await (const character of tables.Character.search("")) {
    characters.push({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      created: character.created,
      refId: character.refId,
      origin: character.origin,
      location: character.location,
      image: character.image,
    });
  }
  return characters;
}

export async function getCharacterById(id: string): Promise<CharacterType | null> {
  const { tables } = await import("harperdb");
  const character = await tables.Character.get({ id });
  return character as unknown as CharacterType ?? null;
}

export async function listLocations(): Promise<LocationType[]> {
  const { tables } = await import("harperdb");
  const locations: LocationType[] = [];
  for await (const location of tables.Location.search("")) {
    locations.push({
      id: location.id,
      name: location.name,
      type: location.type,
      dimension: location.dimension,
      refId: location.refId,
    });
  }
  return locations;
}

export async function getLocationById(id: string): Promise<LocationType | null> {
  const { tables } = await import("harperdb");
  const location = await tables.Location.get({ id });
  return location as unknown as LocationType  ?? null;
}
export async function listEpisodes(): Promise<EpisodeType[]> {
  const { tables } = await import("harperdb");
  const episodes: EpisodeType[] = [];
  for await (const episode of tables.Episode.search("")) {
    episodes.push({
      id: episode.id,
      name: episode.name,
      air_date: episode.air_date,
      episode: episode.episode,
      refId: episode.refId,
    });
  }
  return episodes;
}
export async function getEpisodeById(id: string): Promise<EpisodeType | null> {
  const { tables } = await import("harperdb");
  const episode = await tables.Episode.get({ id });
  return episode as unknown as EpisodeType ?? null;
}