import type { City, Pokemon, Region } from "@domain";

export interface PokemonRepository {
  getPokemons(): Promise<Pokemon[]>;
  getRegions(): Promise<Region[]>;
  getCities(region: string): Promise<City[]>;
}