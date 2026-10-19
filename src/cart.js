function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(arr, product, amount) {
  const cart = [...arr];
  const foundProduct = cart.find(item => item.id === product.id);
  const minAmountError = new RangeError('Количество товаров должно быть больше 0.');
  const maxAmountError = new RangeError('Выбранное количество недоступно для заказа!');

  if (amount < 1) throw minAmountError;
  if (amount > product.stock) throw maxAmountError;
  if (foundProduct?.quantity >= foundProduct?.stock) throw maxAmountError;
  
  if (!foundProduct) {
    cart.push({...product, quantity: amount });
  } else {
    foundProduct.quantity += amount;
  }
  
  return cart;
}

function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
