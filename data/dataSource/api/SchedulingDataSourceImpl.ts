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
    const res = await this.apiConnection.POST<{ date: string; }, string[]>("/scheduling/time", { date });
    return res.data;
  }

  async create(payload: Schedule): Promise<IResponse<Schedule | null>> {
    const successRes: IResponse<Schedule> = { data: payload, status: 200, statusText: "Success" };
    const errorRes: IResponse<null> = { data: null, status: 400, statusText: "Service unavailable" };

    await new Promise(resolve => setTimeout(resolve, 3000));
    const rand = Math.random();

    if (rand > 0.3) return successRes;
    return errorRes;
  }
}