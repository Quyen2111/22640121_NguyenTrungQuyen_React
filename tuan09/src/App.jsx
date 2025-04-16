import React from 'react';
import { useSelector } from 'react-redux';
import Counter from './features/counter/Counter';
import TodoList from './features/todo/TodoList';
import ThemeToggle from './components/themeToggle.jsx';
import ProductList from './components/productList.jsx';
import ShoppingCart from './components/shoppingCart.jsx';
import Login from './components/Login.jsx';
import Welcome from './components/Welcome.jsx';
function App() {
  const mode = useSelector((state) => state.theme.mode);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div
    className={`min-h-screen ${mode === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} transition-colors`}
  >
      <div className="p-4">
        <ThemeToggle />
      </div>
      
      <div>
        <h1 className='justify-center text-center items-center font-bold text-black-500 text-[30px]'>
          Bai 1
        </h1>
      </div>
        
      <Counter />
      
      <div>
        <h1 className='justify-center text-center items-center font-bold text-black-500 text-[30px]'>
          Bai 2
        </h1>
      </div>
      
      <TodoList />
      <div className='justify-center text-center items-center'>
      <h1 className='justify-center text-center items-center font-bold text-black-500 text-[30px]'>
         Giỏ Hàng Redux
      </h1>
      <ProductList />
      <ShoppingCart />
    </div>
    <div className="container max-w-lg mx-auto p-4">
        {isLoggedIn ? <Welcome /> : <Login />}
      </div>
  </div>
  );
}

export default App;