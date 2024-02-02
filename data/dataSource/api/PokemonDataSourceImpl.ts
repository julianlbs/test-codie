import type { RegionResponse, PokemonDataSource, CitiesResponse, PokemonsResponse } from "../PokemonDataSource";
import { Connection } from "../../api/Connection";
import { injectable } from "inversify";
import { API_CONSTANTS } from "@/infra/constants/api";

@injectable()
export class PokemonDataSourceImpl implements PokemonDataSource {
  private pokemonAPIConnection = new Connection(API_CONSTANTS.POKEMON_API);

  constructor() {}

  async getPokemons() {
    const res: PokemonsResponse = await this.pokemonAPIConnection.GET("/pokemon");
    return res;
  }

  async getRegions() {
    const res: RegionResponse = await this.pokemonAPIConnection.GET("/region");
    console.log(res);
    return res;
  }

  async getCities(region: string) {
    const res: CitiesResponse = await this.pokemonAPIConnection.GET(`/region/${region}`);
    return res;
  }
}