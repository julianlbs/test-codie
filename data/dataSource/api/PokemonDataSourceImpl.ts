import type { City, Pokemon, Region } from "@domain";
import type { PokemonApiRes, PokemonDataSource } from "../PokemonDataSource";
import { Connection } from "../../api/Connection";
import { injectable } from "inversify";
import { API_CONSTANTS } from "@/infra/constants/api";

@injectable()
export class PokemonDataSourceImpl implements PokemonDataSource {
  private pokemonAPIConnection = new Connection(API_CONSTANTS.POKEMON_API);

  constructor() {}

  async getPokemons(): Promise<PokemonApiRes<Pokemon>> {
    const res = await this.pokemonAPIConnection.GET<PokemonApiRes<Pokemon>>("/pokemon");
    return res.data;
  }

  async getRegions(): Promise<PokemonApiRes<Region>> {
    const res = await this.pokemonAPIConnection.GET<PokemonApiRes<Region>>("/region");

    return res.data;
  }

  async getCities(region: string): Promise<PokemonApiRes<City>> {
    const res = await this.pokemonAPIConnection.GET<PokemonApiRes<City>>(`/region/${region}`);
    return res.data;
  }
}