import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {

    const user = {
      username,
      email: `${username}@example.com`,
    };

    dispatch(login(user)); 
  };

  return (
    <div className="login-container max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Đăng Nhập</h2>
      <div>
        <label className="block mb-2">Tên Đăng Nhập:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
      </div>
      <div>
        <label className="block mb-2">Mật khẩu:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
      </div>
      <button
        onClick={handleLogin}
        className="w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Đăng Nhập
      </button>
    </div>
  );
}

export default Login;