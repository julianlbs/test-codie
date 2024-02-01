import { useEffect, useState } from "react";
import type { SchedulingUseCase } from "@domain";
import { INVERSIFY_TYPES } from "@/infra/constants/inversify";
import { useInjection } from "inversify-react";

export interface IUseScheduling {
  getDates(): void;
  dates: string[];
  setSelectedDate(value: string): void;
  selectedDate: string;
  getTime(): void;
  time: string[];
  // createSchedule(payload: Schedule): IResponse<Schedule>
}

export function useScheduling() {
  const [regions, setRegions] = useState<string[]>([]);
  const scheduling = useInjection<SchedulingUseCase>(INVERSIFY_TYPES.SchedulingUseCase);

  useEffect(() => {
    const fetchData = async () => {
      const data = await scheduling.getRegions();
      Array.isArray(data) && setRegions(data);
    };
    fetchData();
  }, []);

  return { regions };
}