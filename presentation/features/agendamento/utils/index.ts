export const formatCityName = (name: string) => {
  if (name.length === 0) return name;
  const words = name.split('-');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  return capitalizedWords.join(' ');
};