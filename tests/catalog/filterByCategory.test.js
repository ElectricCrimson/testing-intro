const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test('"all" возвращает все товары с ID от 1 до 6', () => {
    const productIds = filterByCategory(products, 'all').map(item => item.id);
    expect(productIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('undefined возвращает все товары с ID от 1 до 6', () => {
    const productIds = filterByCategory(products, undefined).map(item => item.id);
    expect(productIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('пустая строка возвращает все товары с ID от 1 до 6', () => {
    const productIds = filterByCategory(products, '').map(item => item.id);
    expect(productIds).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('"electronics" возвращает товары с ID [1, 2]', () => {
    const productIds = filterByCategory(products, 'electronics').map(item => item.id);
    expect(productIds).toEqual([1, 2]);
  });

  test('"books" возвращает товары с ID [3, 6]', () => {
    const productIds = filterByCategory(products, 'books').map(item => item.id);
    expect(productIds).toEqual([3, 6]);
  });

  test('"home" возвращает товары с ID [4, 5]', () => {
    const productIds = filterByCategory(products, 'home').map(item => item.id);
    expect(productIds).toEqual([4, 5]);
  });

  test('"clothes" возвращает пустой массив', () => {
    const currentArr = filterByCategory(products, 'clothes');
    expect(currentArr).toEqual([]);
  });

  test('"toys" возвращает пустой массив', () => {
    const currentArr = filterByCategory(products, 'toys');
    expect(currentArr).toEqual([]);
  });

  test('"sports" возвращает пустой массив', () => {
    const currentArr = filterByCategory(products, 'sports');
    expect(currentArr).toEqual([]);
  });
});
