import type { Schedule, SchedulingUseCase } from "@domain";
import { INVERSIFY_TYPES } from "@/infra/constants/inversify";
import { useInjection } from "inversify-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IResponse, PokemonsResponse } from "@data";

export interface IUseScheduling {}

export function useScheduling() {
  const [cities, setCities] = useState<IResponse<string[]>>({ data: [] } as any);
  const [timeList, setTimeList] = useState<IResponse<string[]>>({ data: [] } as any);
  const scheduling = useInjection<SchedulingUseCase>(INVERSIFY_TYPES.SchedulingUseCase);

  const datesQuery = useQuery<string[]>({
    queryKey: ['dates'],
    initialData: [],
    queryFn: async () => {
      const result = await scheduling.getDates();
      if (!Array.isArray(result)) return [];
      return result;
    }
  });

  const citiesQuery = useMutation({
    mutationFn: async (region: string) => {
      const result = await scheduling.getCities(region);
      setCities(result);
      return result;
    }
  });

  const pokemonsQuery = useQuery<PokemonsResponse>({
    queryKey: ['pokemons'],
    initialData: { data: [] } as any,
    enabled: true,
    queryFn: async () => {
      const result = await scheduling.getPokemons();
      return result;
    }
  });

  const timeQuery = useMutation({
    mutationFn: async (date: string) => {
      const result = await scheduling.getTime(date);
      setTimeList(result);
      return result;
    }
  });

  const createScheduling = useMutation({
    mutationFn: async (payload: Schedule) => {
      return scheduling.create(payload);
    }
  });

  return { datesQuery, cities, citiesQuery, pokemonsQuery, timeList, timeQuery, createScheduling };
}