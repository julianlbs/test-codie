import type { Schedule } from "@domain";
import type { SchedulingDataSource } from "../SchedulingDataSource";
import { Connection, type IResponse } from "../../api/Connection";
import { injectable } from "inversify";
import { API_CONSTANTS } from "@/infra/constants/api";

@injectable()
export class SchedulingDataSourceImpl implements SchedulingDataSource {
  private apiConnection = new Connection(API_CONSTANTS.SERVER_API);

  constructor() {}

  async getDates() {
    const res: IResponse<string[]> = await this.apiConnection.GET("/scheduling/date");
    return res;
  }

  async getTime(date: string) {
    const res: IResponse<string[]> = await this.apiConnection.POST<{ date: string; }>("/scheduling/time", { date });
    return res;
  }

  async create(payload: Schedule) {
    const successRes: IResponse<Schedule> = { data: payload, status: 200, statusText: "Success" };
    const errorRes: IResponse<Schedule> = { data: null, status: 400, statusText: "Service unavailable" };

    await new Promise(resolve => setTimeout(resolve, 3000));
    const rand = Math.random();

    if (rand > 0.3) return successRes;
    return errorRes;
  }
}