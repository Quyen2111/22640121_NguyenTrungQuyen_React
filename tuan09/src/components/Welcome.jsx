import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';

function Welcome() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  
  const handleLogout = () => {
    dispatch(logout()); 
  };

  return (
    <div className="welcome-container max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Chào Mừng, {user.username}!</h2>
      <p className="text-center text-lg">Bạn đã đăng nhập thành công.</p>
      <button
        onClick={handleLogout}
        className="w-full p-2 mt-4 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
      >
        Đăng Xuất
      </button>
    </div>
  );
}

export default Welcome;