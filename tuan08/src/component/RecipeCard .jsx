import React from "react";

const RecipeCard = ({ image, title, time }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-full max-w-[220px]">
      <img src={image} alt={title} className="rounded-lg mb-4" />
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <div className="text-pink-500 text-sm mt-1">{time} minutes</div>
      <div className="mt-2 text-right">
        <button className="text-pink-500 hover:text-pink-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
