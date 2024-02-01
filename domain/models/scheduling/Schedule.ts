import type { Pokemon } from "../pokemon/Pokemon";

export interface Schedule {
  name: string;
  surName: string;
  region: string;
  city: string;
  pokemonList: Pokemon[];
  date: Date;
  time: string;
  price: Price;
}

export interface Price {
  currency: 'R$',
  pricePerPokemon: number;
  taxPercentage: number;
  total: number;
}