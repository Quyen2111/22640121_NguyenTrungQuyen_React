import React from 'react';
import { useSelector } from 'react-redux';
import Counter from './features/counter/Counter';
import TodoList from './features/todo/TodoList';
import ThemeToggle from './components/themeToggle.jsx';
function App() {
  const mode = useSelector((state) => state.theme.mode);
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
  </div>
  );
}

export default App;