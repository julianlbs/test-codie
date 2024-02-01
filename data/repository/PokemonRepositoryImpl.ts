import type { Pokemon, Region, PokemonRepository, City } from "@domain";
import type { PokemonDataSource } from "../dataSource/PokemonDataSource";
import { inject, injectable } from "inversify";
import { INVERSIFY_TYPES } from "@/infra/constants/inversify";

@injectable()
export class PokemonRepositoryImpl implements PokemonRepository {
  private dataSource: PokemonDataSource;

  constructor(@inject(INVERSIFY_TYPES.PokemonDataSource) _dataSource: PokemonDataSource) {
    this.dataSource = _dataSource;
  }

  async getPokemons(): Promise<Pokemon[]> {
    const res = await this.dataSource.getPokemons();
    return res.results;
  }

  async getRegions(): Promise<Region[]> {
    const res = await this.dataSource.getRegions();
    return res.results;
  }

  async getCities(region: string): Promise<City[]> {
    const res = await this.dataSource.getCities(region);
    return res.results;
  }
}