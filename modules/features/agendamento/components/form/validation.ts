import * as yup from 'yup';

export const priceSchema = yup.object({
  currency: yup.string().required('Selecione uma opção'),
  pricePerPokemon: yup.number().min(0).max(999999999).required('Insira o preço por pokémon'),
  taxPercentage: yup.number().min(0).max(999999999).required('Insira a taxa'),
  subTotal: yup.number().min(0).max(999999999).required('Insira o subTotal'),
  total: yup.number().min(0).max(999999999).required('Insira o total'),
});

export const schedulingSchema = yup.object({
  name: yup.string().required('Insira o seu primeiro nome'),
  surName: yup.string().required('Insira o seu sobrenome'),
  region: yup.string().required('Selecione a região'),
  city: yup.string().required('Selecione a cidade'),
  pokemons: yup.array().min(1, 'Obrigatório pelo menos 1 pokemón').of(yup.string().required("Selecione uma opção")).required(),
  date: yup.string().required('Selecione a data'),
  time: yup.string().required('Selecione o horário'),
  price: priceSchema
});