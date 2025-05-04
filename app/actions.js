"use server";

import("harperdb");

export async function listCharacters() {
  const { tables } = await import("harperdb");
  const characters = [];
  for await (const character of tables.Character.search()) {
    characters.push({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
    });
  }
  return characters;
}

export async function getCharacterById(id) {
  const { tables } = await import("harperdb");
  const character = await tables.Character.get({ id });
  return character;
}

export async function listLocations() {
  const { tables } = await import("harperdb");
  const locations = [];
  for await (const location of tables.Location.search()) {
    locations.push({
      id: location.id,
      name: location.name,
      type: location.type,
      dimension: location.dimension,
    });
  }
  return locations;
}

export async function getLocationById(id) {
  const { tables } = await import("harperdb");
  const location = await tables.Location.get({ id });
  return location;
}

export async function listEpisodes() {
  const { tables } = await import("harperdb");
  const episodes = [];
  for await (const episode of tables.Episode.search()) {
    episodes.push({
      id: episode.id,
      name: episode.name,
      air_date: episode.air_date,
      episode: episode.episode,
    });
  }
  return episodes;
}

export async function getEpisodeById(id) {
  const { tables } = await import("harperdb");
  const episode = await tables.Episode.get({ id });
  return episode;
}
