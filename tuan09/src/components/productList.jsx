import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

function ProductList() {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Sản phẩm 1', price: 100000, image: '/sp1.png' },
    { id: 2, name: 'Sản phẩm 2', price: 200000, image: '/sp2.png' },
    { id: 3, name: 'Sản phẩm 3', price: 300000, image: '/sp3.png' },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="product-list max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Sản Phẩm</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="product-item p-4 bg-white shadow-md rounded-lg text-center">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="text-lg font-medium">{product.name}</p>
            <p className="text-xl font-bold text-green-600">{product.price} VND</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            >
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;