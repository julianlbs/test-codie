import type { Schedule } from "@domain";
import type { IResponse } from "../api/Connection";

export interface SchedulingDataSource {
  getDates(): Promise<string[]>;
  getTime(date: string): Promise<string[]>;
  create(schedule: Schedule): Promise<IResponse<Schedule | null>>;
}