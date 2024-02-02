import type { City, Pokemon, Region } from "@domain";

export interface RegionResponse {
  count: number,
  next: string | null,
  prev: string | null;
  results: Region[];
}

export interface CitiesResponse {
  locations: City[],
  name: string;
}

export interface PokemonsResponse {
  count: number,
  next: string | null,
  previus: string | null,
  results: Pokemon[];
}

export interface PokemonDataSource {
  getPokemons(): Promise<PokemonsResponse>,
  getRegions(): Promise<RegionResponse>;
  getCities(region: string): Promise<CitiesResponse>;
}