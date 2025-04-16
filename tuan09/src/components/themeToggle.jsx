import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

function ThemeToggle() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
   
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]); 

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 bg-gray-300 dark:bg-gray-800 dark:text-white rounded"
    >
      Chế độ: {mode === 'light' ? '🌞 Sáng' : '🌙 Tối'}
    </button>
  );
}

export default ThemeToggle;