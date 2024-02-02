import type { Schedule } from "@domain";
import type { IResponse } from "@data";

export interface SchedulingRepository {
  getDates(): Promise<string[]>;
  getTime(date: string): Promise<string[]>;
  create(schedule: Schedule): Promise<IResponse<Schedule | null>>;
}