export interface RickOrigin {
  name: string;
  url?: string;
}

export interface RickCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  origin?: RickOrigin;
  location?: { name: string; url?: string };
  image: string;
  episode?: string[];
  url?: string;
  created?: string;
}
