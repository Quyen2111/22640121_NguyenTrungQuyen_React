import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/cartSlice';

function ShoppingCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  ).toFixed(2);

  return (
    <div className="shopping-cart max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Giỏ Hàng</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-xl">Giỏ hàng của bạn trống.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <span className="flex-1 ml-4 text-lg font-medium">{item.name}</span>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="w-16 p-2 text-center bg-white border border-gray-300 rounded"
                />
                <span className="ml-4 text-lg font-semibold">{(item.price * item.quantity).toFixed(2)} VND</span>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-gray-200 rounded-lg shadow-lg">
            <p className="text-xl font-semibold">Tổng Số Lượng: {totalQuantity}</p>
            <p className="text-2xl font-bold text-green-600">Tổng Tiền: {totalPrice} VND</p>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;