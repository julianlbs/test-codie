import type { City, Pokemon, Region } from "@domain";

export interface PokemonApiRes<T> {
  count: number,
  next: string | null,
  prev: string | null;
  results: T[];
}

export interface PokemonDataSource {
  getPokemons(): Promise<PokemonApiRes<Pokemon>>,
  getRegions(): Promise<PokemonApiRes<Region>>;
  getCities(region: string): Promise<PokemonApiRes<City>>;
}