export const capitalizeText = (name: string) => {
  if (name.length === 0) return name;

  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const formatCurrencyToBRL = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(value ?? 0);
};