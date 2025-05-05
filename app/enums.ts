export const ExternalApiUrl = {
  Character: "https://rickandmortyapi.com/api/character",
  Location: "https://rickandmortyapi.com/api/location",
  Episode: "https://rickandmortyapi.com/api/episode",
} as const;

export const EntityType = {
  Character: "Character",
  Location: "Location",
  Episode: "Episode",
} as const;

export const Title = {
  Home: "Home",
  Characters: "Characters",
  Locations: "Locations",
  Episodes: "Episodes",
} as const;

export const BasePath = {
  Characters: "characters",
  Locations: "locations",
  Episodes: "episodes",
} as const;

export const BackPath = {
  Home: "/",
  Characters: "/characters",
  Locations: "/locations",
  Episodes: "/episodes",
} as const;

export const RedirectPath = {
  Characters: "/favorites/characters",
  Locations: "/favorites/locations",
  Episodes: "/favorites/episodes",
} as const;