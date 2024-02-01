import type { Pokemon, PokemonRepository, Schedule, SchedulingRepository } from "@domain";
import type { IResponse } from "@data";
import { inject, injectable } from "inversify";
import { INVERSIFY_TYPES } from "@/infra/constants/inversify";

export interface ISchedulingUseCase {
  getPokemons(): Promise<Pokemon[]>;
  getRegions(): Promise<string[]>;
  getCities(region: string): Promise<string[]>;
  getDates(): Promise<string[]>;
  getTime(date: string): Promise<string[]>;
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

  public async getRegions(): Promise<string[]> {
    const data = await this?.pokemonRepo?.getRegions();
    if (data) {
      return data?.map(item => item.name);
    } else {
      return [];
    }
  }

  public async getCities(region: string): Promise<string[]> {
    const data = await this?.pokemonRepo?.getCities(region);
    return data?.map(item => item.name);
  }

  public async getPokemons(): Promise<Pokemon[]> {
    const data = await this?.pokemonRepo?.getPokemons();
    return data;
  }

  public async getDates(): Promise<string[]> {
    const data = await this.schedulingRepo.getDates();
    return data;
  }

  public async getTime(date: string): Promise<string[]> {
    const data = await this.schedulingRepo.getTime(date);
    return data;
  }

  public async create(schedule: Schedule): Promise<IResponse<Schedule>> {
    const data = await this.schedulingRepo.create(schedule);
    return data;
  }

}