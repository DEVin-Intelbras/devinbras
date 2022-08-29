export const formatMoney = (value) => {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
};
