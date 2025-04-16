import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './todoSlice';

function TodoList() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="w-[300px] mx-auto mt-8 bg-white shadow rounded p-4">
      <h2 className="text-xl font-bold mb-4 text-center">📝 Todo List</h2>
      <div className="flex mb-4 gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded px-2 py-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập công việc..."
        />
        <button
          onClick={handleAdd}
          className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Thêm
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border-b py-1"
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`cursor-pointer ${
                todo.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 hover:text-red-700"
            >
              Xoa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;