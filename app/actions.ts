"use server";
import { customTables } from "../resources";
import { CharacterType, EpisodeType, LocationType } from "./types";

export async function listCharacters(): Promise<CharacterType[]> {
  const result = await customTables.Character.get({});
  return Array.isArray(result.local) ? result.local : result.external ?? [];
}

export async function getCharacterById(id: string): Promise<CharacterType | null> {
  const result = await customTables.Character.get({ id });
  return result.local ? result.local : result.external ?? null;
}

export async function listLocations(): Promise<LocationType[]> {
  const result = await customTables.Location.get({});
  return Array.isArray(result.local) ? result.local : result.external ?? [];
}

export async function getLocationById(id: string): Promise<LocationType | null> {
  const result = await customTables.Location.get({ id });
  return result.local ? result.local : result.external ?? null;
}

export async function listEpisodes(): Promise<EpisodeType[]> {
  const result = await customTables.Episode.get({});
  return Array.isArray(result.local) ? result.local : result.external ?? [];
}

export async function getEpisodeById(id: string): Promise<EpisodeType | null> {
  const result = await customTables.Episode.get({ id });
  return result.local ? result.local : result.external ?? null;
}