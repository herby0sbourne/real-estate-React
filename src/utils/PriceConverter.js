const price = (cost) => {
  return new Intl.NumberFormat('en-us', {
    // style: 'currency',
    style: 'decimal',
    // currency: 'USD',
  }).format(cost);
};

export default price;
