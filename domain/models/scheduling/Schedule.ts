export interface Schedule {
  name: string;
  surName: string;
  region: string;
  city: string;
  pokemons: string[];
  date: string;
  time: string;
  price: Price;
}

export interface Price {
  currency: string,
  pricePerPokemon: number;
  taxPercentage: number;
  subTotal: number;
  total: number;
}