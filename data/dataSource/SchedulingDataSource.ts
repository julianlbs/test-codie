import type { Schedule } from "@domain";
import type { IResponse } from "../api/Connection";

export interface SchedulingDataSource {
  getDates(): Promise<IResponse<string[]>>;
  getTime(date: string): Promise<IResponse<string[]>>;
  create(schedule: Schedule): Promise<IResponse<Schedule>>;
}