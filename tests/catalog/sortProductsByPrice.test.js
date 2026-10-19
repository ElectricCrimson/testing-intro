const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test('все товары c "asc" сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const sortedProductIds = sortProductsByPrice(products, 'asc').map(item => item.id);
    expect(sortedProductIds).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const sortedProductIds = sortProductsByPrice(products).map(item => item.id);
    expect(sortedProductIds).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('товары [1, 3, 4] c "asc" сортируются как [3, 4, 1]', () => {
    const sortedProductIds = sortProductsByPrice(products, 'asc').filter(({ id }) => [1, 3, 4].includes(id)).map(item => item.id);
    expect(sortedProductIds).toEqual([3, 4, 1]);
  });

  test('все товары c "desc" сортируются как [1, 2, 4, 5, 6, 3]', () => {
    const sortedProductIds = sortProductsByPrice(products, 'desc').map(item => item.id);
    expect(sortedProductIds).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test('товары [3, 1, 4] c "desc" сортируются как [1, 4, 3]', () => {
    const sortedProductIds = sortProductsByPrice(products, 'desc').filter(({ id }) => [3, 1, 4].includes(id)).map(item => item.id);
    expect(sortedProductIds).toEqual([1, 4, 3]);
  });

  test('товары [5, 2, 6] c "desc" сортируются как [2, 5, 6]', () => {
    const sortedProductIds = sortProductsByPrice(products, 'desc').filter(({ id }) => [5, 2, 6].includes(id)).map(item => item.id);
    expect(sortedProductIds).toEqual([2, 5, 6]);
  });

  test('"asc" не меняет исходный массив [1, 3, 4]', () => {
    const unsortedProductIds = products.filter(({ id }) => [1, 3, 4].includes(id)).map(item => item.id);
    sortProductsByPrice(products, 'asc');
    expect(unsortedProductIds).toEqual([1, 3, 4]);
  });

  test('"desc" не меняет исходный массив [1, 3, 4]', () => {
    const unsortedProductIds = products.filter(({ id }) => [1, 3, 4].includes(id)).map(item => item.id);
    sortProductsByPrice(products, 'desc');
    expect(unsortedProductIds).toEqual([1, 3, 4]);
  });

  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const unsortedProductIds = products.map(item => item.id);
    sortProductsByPrice(products);
    expect(unsortedProductIds).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
