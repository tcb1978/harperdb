export type CharacterType = {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  created: string;
  refId: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
  };
  image: string;
};

export type LocationType = {
  id: string;
  name: string;
  type: string;
  dimension: string;
  refId: string;
};

export type EpisodeType = {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  refId: string;
};

export type EntityType =
  | Array<CharacterType | LocationType | EpisodeType>
  | { data: Array<CharacterType
  | LocationType
  | EpisodeType>;
  error?: string
} | null;