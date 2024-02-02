import type { RegionResponse, PokemonDataSource, CitiesResponse, PokemonsResponse } from "../PokemonDataSource";
import { Connection } from "../../api/Connection";
import { injectable } from "inversify";
import { API_CONSTANTS } from "@/infra/constants/api";

@injectable()
export class PokemonDataSourceImpl implements PokemonDataSource {
  private pokemonAPIConnection = new Connection(API_CONSTANTS.POKEMON_API);

  constructor() {}

  async getPokemons(): Promise<PokemonsResponse> {
    const res = await this.pokemonAPIConnection.GET<PokemonsResponse>("/pokemon");
    return res.data;
  }

  async getRegions(): Promise<RegionResponse> {
    const res = await this.pokemonAPIConnection.GET<RegionResponse>("/region");
    return res.data;
  }

  async getCities(region: string): Promise<CitiesResponse> {
    const res = await this.pokemonAPIConnection.GET<CitiesResponse>(`/region/${region}`);
    return res.data;
  }
}