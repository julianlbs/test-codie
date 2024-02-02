import { ENV } from "@/infra/config/env";

export const API_CONSTANTS = {
  POKEMON_API: "https://pokeapi.co/api/v2",
  SERVER_API: `${ENV.PATH_NAME}/api`
};