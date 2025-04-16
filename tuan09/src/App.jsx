import React from 'react';
import Counter from './features/counter/Counter';
import TodoList from './features/todo/TodoList';

function App() {
  return (
    <div >
      <div>
         <h1 className='justify-center text-center items-center font-bold text-black-500 text-[30px]'>Bai 1</h1>
      </div>
      <Counter />
      <div>
         <h1 className='justify-center text-center items-center font-bold text-black-500 text-[30px]'>Bai 2</h1>
      </div>
      <TodoList />
    </div>
  );
}

export default App;