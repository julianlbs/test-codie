import type { PokemonRepository, Schedule, SchedulingRepository } from "@domain";
import type { IResponse, PokemonsResponse } from "@data";
import { inject, injectable } from "inversify";
import { INVERSIFY_TYPES } from "@/infra/constants/inversify";

export interface ISchedulingUseCase {
  getPokemons(): Promise<PokemonsResponse>;
  getRegions(): Promise<IResponse<string[]>>;
  getCities(region: string): Promise<IResponse<string[]>>;
  getDates(): Promise<IResponse<string[]>>;
  getTime(date: string): Promise<IResponse<string[]>>;
  create(schedule: Schedule): Promise<IResponse<Schedule>>;
}

@injectable()
export class SchedulingUseCase implements ISchedulingUseCase {
  private pokemonRepo: PokemonRepository;
  private schedulingRepo: SchedulingRepository;

  constructor(@inject(INVERSIFY_TYPES.PokemonRepository) _pokemonRepo: PokemonRepository, @inject(INVERSIFY_TYPES.SchedulingRepository) _schedulingRepo: SchedulingRepository) {
    this.pokemonRepo = _pokemonRepo;
    this.schedulingRepo = _schedulingRepo;
  }

  public async getRegions() {
    const res = await this.pokemonRepo.getRegions();
    const resData = res?.data?.results.map(item => item.name);
    if (resData) {
      return { ...res, data: resData };
    } else {
      return { ...res, data: null };
    }
  }

  public async getCities(region: string) {
    const res = await this.pokemonRepo.getCities(region);
    const resData = res?.data?.locations.map(item => item.name);
    if (resData) {
      return { ...res, data: resData };
    } else {
      return { ...res, data: null };
    }
  }

  public async getPokemons() {
    const res = await this.pokemonRepo.getPokemons();
    return res;
  }

  public async getDates() {
    const res = await this.schedulingRepo.getDates();
    return res;
  }

  public async getTime(date: string) {
    const res = await this.schedulingRepo.getTime(date);
    return res;
  }

  public async create(schedule: Schedule) {
    const data = await this.schedulingRepo.create(schedule);
    return data;
  }
}