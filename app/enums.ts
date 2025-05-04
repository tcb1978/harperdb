export enum ExternalApiUrl {
  Character = "https://rickandmortyapi.com/api/character",
  Location = "https://rickandmortyapi.com/api/location",
  Episode = "https://rickandmortyapi.com/api/episode",
}

export enum EntityType {
  Character = "Character",
  Location = "Location",
  Episode = "Episode",
}

export enum EntityTitle {
  Characters = "Characters",
  Locations = "Locations",
  Episodes = "Episodes",
}

export enum EntityBasePath {
  Characters = "characters",
  Locations = "locations",
  Episodes = "episodes",
}

export enum EntityBackPath {
  Characters = "/characters",
  Locations = "/locations",
  Episodes = "/episodes",
}

export enum EntityRedirectPath {
  Characters = "/favorites/characters",
  Locations = "/favorites/locations",
  Episodes = "/favorites/episodes",
}