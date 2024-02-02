import type { Schedule } from "@domain";
import type { IResponse } from "@data";

export interface SchedulingRepository {
  getDates(): Promise<IResponse<string[]>>;
  getTime(date: string): Promise<IResponse<string[]>>;
  create(schedule: Schedule): Promise<IResponse<Schedule>>;
}