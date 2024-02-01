import { Container } from 'inversify';
import { SchedulingUseCase } from '@domain';
import type { ISchedulingUseCase, PokemonRepository, SchedulingRepository } from '@domain';
import type { PokemonDataSource, SchedulingDataSource } from "@data";
import { PokemonDataSourceImpl, PokemonRepositoryImpl, SchedulingDataSourceImpl, SchedulingRepositoryImpl } from '@data';
import { INVERSIFY_TYPES } from "@/infra/constants/inversify";

const container = new Container();

container.bind<ISchedulingUseCase>(INVERSIFY_TYPES.SchedulingUseCase).to(SchedulingUseCase).inSingletonScope();

container.bind<PokemonRepository>(INVERSIFY_TYPES.PokemonRepository).to(PokemonRepositoryImpl).inSingletonScope();
container.bind<SchedulingRepository>(INVERSIFY_TYPES.SchedulingRepository).to(SchedulingRepositoryImpl).inSingletonScope();

container.bind<PokemonDataSource>(INVERSIFY_TYPES.PokemonDataSource).to(PokemonDataSourceImpl).inSingletonScope();
container.bind<SchedulingDataSource>(INVERSIFY_TYPES.SchedulingDataSource).to(SchedulingDataSourceImpl).inSingletonScope();

export default container;