import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-[200px] h-[200px] border border-gray-300 bg-gray-200 justify-center items-center mx-auto p-4 rounded shadow">
    <h2 className="font-bold text-[24px] mb-2">Counter App</h2>
    <h1 className="text-[32px] font-semibold mb-4">{count}</h1>
    <div className="flex gap-4">
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Tăng
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Giảm
      </button>
    </div>
  </div>
  );
}

export default Counter;