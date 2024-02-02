import type { Pokemon, SchedulingUseCase } from "@domain";
import { INVERSIFY_TYPES } from "@/infra/constants/inversify";
import { useInjection } from "inversify-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export interface IUseScheduling {}

export function useScheduling() {
  const [cities, setCities] = useState<string[]>([]);
  const [timeList, setTimeList] = useState<string[]>([]);
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
      if (!Array.isArray(result)) {
        setCities([]);
        return [];
      }
      setCities(result);
      return result;
    }
  });

  const pokemonsQuery = useQuery<Pokemon[]>({
    queryKey: ['pokemons'],
    initialData: [],
    enabled: true,
    queryFn: async () => {
      const result = await scheduling.getPokemons();
      if (!Array.isArray(result)) return [];
      return result;
    }
  });

  const timeQuery = useMutation({
    mutationFn: async (date: string) => {
      const result = await scheduling.getTime(date);
      if (!Array.isArray(result)) {
        setTimeList([]);
        return [];
      }
      setTimeList(result);
      return result;
    }
  });

  return { datesQuery, cities, citiesQuery, pokemonsQuery, timeList, timeQuery };
}