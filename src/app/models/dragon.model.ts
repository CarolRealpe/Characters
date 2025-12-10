export interface DragonCharacter {
  id: number | string;
  name: string;
  image?: string;
  alias?: string;
  race?: string;
  gender?: string;
  origin?: string;
  description?: string;
  [key: string]: any;
}
