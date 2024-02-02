import type { PokemonRepository } from "@domain";
import type { PokemonDataSource } from "../dataSource/PokemonDataSource";
import { inject, injectable } from "inversify";
import { INVERSIFY_TYPES } from "@/infra/constants/inversify";

@injectable()
export class PokemonRepositoryImpl implements PokemonRepository {
  private dataSource: PokemonDataSource;

  constructor(@inject(INVERSIFY_TYPES.PokemonDataSource) _dataSource: PokemonDataSource) {
    this.dataSource = _dataSource;
  }

  async getPokemons() {
    const res = await this.dataSource.getPokemons();
    return res;
  }

  async getRegions() {
    const res = await this.dataSource.getRegions();
    return res;
  }

  async getCities(region: string) {
    const res = await this.dataSource.getCities(region);
    return res;
  }
}