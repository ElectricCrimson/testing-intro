const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test('"Наушники" возвращает товар с ID 1', () => {
    const searchResultId = searchProducts(products, 'Наушники').map(item => item.id);
    expect(searchResultId).toEqual([1]);  
  });

  test('"Чистый код" возвращает товар с ID 6', () => {
    const searchResultId = searchProducts(products, 'Чистый код').map(item => item.id);
    expect(searchResultId).toEqual([6]);  
  });

  test('"Настольная лампа" возвращает товар с ID 4', () => {
    const searchResultId = searchProducts(products, 'Настольная лампа').map(item => item.id);
    expect(searchResultId).toEqual([4]);  
  });

  test('"javascript" возвращает товар с ID 3', () => {
    const searchResultId = searchProducts(products, 'javascript').map(item => item.id);
    expect(searchResultId).toEqual([3]);  
  });

  test('"ЧЕХОЛ" возвращает товар с ID 5', () => {
    const searchResultId = searchProducts(products, 'ЧЕХОЛ').map(item => item.id);
    expect(searchResultId).toEqual([5]);  
  });

  test('"наушники" возвращает товар с ID 1', () => {
    const searchResultId = searchProducts(products, 'наушники').map(item => item.id);
    expect(searchResultId).toEqual([1]);  
  });

  test('пустая строка возвращает все товары с ID от 1 до 6', () => {
    const searchResultIds = searchProducts(products, '').map(item => item.id);
    expect(searchResultIds).toEqual([1, 2, 3, 4, 5, 6]); 
  });

  test('строка из пробелов возвращает все товары с ID от 1 до 6', () => {
    const searchResultIds = searchProducts(products, '   ').map(item => item.id);
    expect(searchResultIds).toEqual([1, 2, 3, 4, 5, 6]); 
  });

  test('"\\t\\n" возвращает все товары с ID от 1 до 6', () => {
    const searchResultIds = searchProducts(products, '\t\n').map(item => item.id);
    expect(searchResultIds).toEqual([1, 2, 3, 4, 5, 6]); 
  });
});
