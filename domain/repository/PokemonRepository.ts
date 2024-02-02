import type { CitiesResponse, PokemonsResponse, RegionResponse } from "@data";

export interface PokemonRepository {
  getPokemons(): Promise<PokemonsResponse>;
  getRegions(): Promise<RegionResponse>;
  getCities(region: string): Promise<CitiesResponse>;
}