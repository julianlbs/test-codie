import type { Schedule } from "@domain";
import type { SchedulingDataSource } from "../SchedulingDataSource";
import { Connection, type IResponse } from "../../api/Connection";
import { injectable } from "inversify";
import { API_CONSTANTS } from "@/infra/constants/api";

@injectable()
export class SchedulingDataSourceImpl implements SchedulingDataSource {
  private apiConnection = new Connection(API_CONSTANTS.SERVER_API);

  constructor() {}

  async getDates(): Promise<string[]> {
    const res = await this.apiConnection.GET<string[]>("/scheduling/date");
    return res.data;
  }

  async getTime(date: string): Promise<string[]> {
    const res = await this.apiConnection.POST<{ date: string; }, string[]>('/scheduling/time', { date });
    return res.data;
  }

  async create(payload: Schedule): Promise<IResponse<Schedule>> {
    const res = await this.apiConnection.POST<Schedule, Schedule>('/scheduling/dates', payload);
    return res;
  }
}