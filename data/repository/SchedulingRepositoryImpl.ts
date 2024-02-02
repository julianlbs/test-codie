import type { Schedule, SchedulingRepository } from "@domain";
import type { IResponse } from "../api/Connection";
import type { SchedulingDataSource } from "../dataSource/SchedulingDataSource";
import { inject, injectable } from "inversify";
import { INVERSIFY_TYPES } from "@/infra/constants/inversify";

@injectable()
export class SchedulingRepositoryImpl implements SchedulingRepository {
  readonly dataSource: SchedulingDataSource;

  constructor(@inject(INVERSIFY_TYPES.SchedulingDataSource) _dataSource: SchedulingDataSource) {
    this.dataSource = _dataSource;
  }

  async getDates() {
    return await this.dataSource.getDates();
  }

  async getTime(date: string) {
    return this.dataSource.getTime(date);
  }

  async create(schedule: Schedule) {
    return this.dataSource.create(schedule);
  }
}