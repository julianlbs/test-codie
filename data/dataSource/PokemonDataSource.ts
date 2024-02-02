import type { City, Pokemon, Region } from "@domain";
import type { IResponse } from "../_index";

export interface RegionResponse extends IResponse<{
  count: number,
  next: string,
  prev: string;
  results: Region[];
}> {}

export interface CitiesResponse extends IResponse<{
  locations: City[];
  name: string;
}> {}

export interface PokemonsResponse extends IResponse<{
  count: number,
  next: string | null,
  previus: string | null,
  results: Pokemon[];
}> {}
export interface PokemonDataSource {
  getPokemons(): Promise<PokemonsResponse>,
  getRegions(): Promise<RegionResponse>;
  getCities(region: string): Promise<CitiesResponse>;
}