// External API URLs
export const ExternalApiUrl = {
  Character: "https://rickandmortyapi.com/api/character",
  Location: "https://rickandmortyapi.com/api/location",
  Episode: "https://rickandmortyapi.com/api/episode",
} as const;
export type ExternalApiUrl = typeof ExternalApiUrl[keyof typeof ExternalApiUrl];

// Entity Types
export const EntityType = {
  Character: "Character",
  Location: "Location",
  Episode: "Episode",
} as const;
export type EntityType = typeof EntityType[keyof typeof EntityType];

// Entity Titles
export const EntityTitle = {
  Home: "Home",
  Characters: "Characters",
  Locations: "Locations",
  Episodes: "Episodes",
} as const;
export type EntityTitle = typeof EntityTitle[keyof typeof EntityTitle];

// Entity Base Paths
export const EntityBasePath = {
  Characters: "characters",
  Locations: "locations",
  Episodes: "episodes",
} as const;
export type EntityBasePath = typeof EntityBasePath[keyof typeof EntityBasePath];

// Entity Back Paths
export const EntityBackPath = {
  Home: "/",
  Characters: "/characters",
  Locations: "/locations",
  Episodes: "/episodes",
} as const;
export type EntityBackPath = typeof EntityBackPath[keyof typeof EntityBackPath];

// Entity Redirect Paths
export const EntityRedirectPath = {
  Characters: "/favorites/characters",
  Locations: "/favorites/locations",
  Episodes: "/favorites/episodes",
} as const;
export type EntityRedirectPath = typeof EntityRedirectPath[keyof typeof EntityRedirectPath];