async function fetchAllCharacters() {
  let allCharacters = [];
  let url = "https://rickandmortyapi.com/api/character";
  while (url) {
    const res = await fetch(url);
    const data = await res.json();
    allCharacters = allCharacters.concat(data.results);
    url = data.info.next;
  }
  return allCharacters;
}

async function seedCharacters() {
  const { tables } = await import("harperdb");
  const characters = await fetchAllCharacters();

  for (const character of characters) {
    const preparedCharObj = {
      id: String(character.id),
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character.origin,
      location: character.location,
      image: character.image,
      episode: character.episode,
      url: character.url,
      created: character.created,
    };
    await tables.Character.put(preparedCharObj);
  }
  console.log(`Seeded ${characters.length} characters!`);
}

seedCharacters().catch(console.error);

async function fetchAllEpisodes() {
  let allEpisodes = [];
  let url = "https://rickandmortyapi.com/api/episode";
  while (url) {
    const res = await fetch(url);
    const data = await res.json();
    allEpisodes = allEpisodes.concat(data.results);
    url = data.info.next;
  }
  return allEpisodes;
}

async function seedEpisodes() {
  const { tables } = await import("harperdb");
  const episodes = await fetchAllEpisodes();
  for (const episode of episodes) {
    await tables.Episode.put({
      id: String(episode.id),
      name: episode.name,
      air_date: episode.air_date,
      episode: episode.episode,
      characters: episode.characters,
      url: episode.url,
      created: episode.created,
    });
  }
  console.log(`Seeded ${episodes.length} episodes!`);
}

seedEpisodes().catch(console.error);
async function fetchAllLocations() {
  let allLocations = [];
  let url = "https://rickandmortyapi.com/api/location";
  while (url) {
    const res = await fetch(url);
    const data = await res.json();
    allLocations = allLocations.concat(data.results);
    url = data.info.next;
  }
  return allLocations;
}
async function seedLocations() {
  const { tables } = await import("harperdb");
  const locations = await fetchAllLocations();
  for (const location of locations) {
    await tables.Location.put({
      id: String(location.id),
      name: location.name,
      type: location.type,
      dimension: location.dimension,
      residents: location.residents,
      url: location.url,
      created: location.created,
    });
  }
  console.log(`Seeded ${locations.length} locations!`);
}
seedLocations().catch(console.error);
