import React, { useEffect, useState } from "react";

export const LayAPI = () => {
    const [dulieu, setDulieu] = useState([]);

    useEffect(() => {
        fetch("https://67ecb27daa794fb3222e7adf.mockapi.io/subnav1/tongquan")
        .then((res) => res.json())
        .then((data) => setDulieu(data))
        .catch((err) => console.log("loi", err));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 p-4">
        {dulieu.map((item, index) => {
            return (
                <div
                key={index}
                className={`p-6 flex flex-col items-center text-center rounded-lg shadow-lg ${
                    index === 0
                        ? "bg-pink-100" 
                        : "bg-blue-100" 
                }`}
            >
                    <p className="text-xl font-semibold text-black-800">{item.name}</p>
                    <p className="text-lg text-black-500 mt-2">${item.money}</p>
                    <p className="text-md text-green-500 mt-1">{item.type}%</p>
                    <p className="text-sm text-gray-500 mt-2">{item.tyle}</p>
                </div>
            );
        })}
    </div>
    );
};
