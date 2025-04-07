import React, { useEffect, useState } from "react";
import button1509 from "../image/Button 1509.png";
import button1529 from "../image/Button 1529.png";
import button1530 from "../image/Button 1530.png";


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
            let imgSrc;
            if (index === 0) imgSrc = button1509;
            else if (index === 1) imgSrc = button1529;
            else if (index === 2) imgSrc = button1530;
            return (
                <div
                key={index}
                className={`p-6 flex flex-col rounded-lg shadow-lg ${
                    index === 0
                        ? "bg-pink-100" 
                        : "bg-blue-100" 
                }`}
            >
                    <div className="flex">
                        <p className="text-xl font-semibold text-black-800">{item.name}</p>
                        {imgSrc && (    
                            <button onClick={() => console.log(`Clicked image ${index + 1}`)}
                            Class="ml-auto"
                            >
                                <img src={imgSrc} alt={`${index + 1}`} className="px-2 w-[50px] h-[35px]" />
                             </button>
                        )}
                    </div>
                    <p className="text-lg text-black-500 mt-2 font-bold text-[30px]">${item.money}</p>
                    <div className="flex">
                    <p className="text-sm text-green-500 mt-2 px-2">{item.tyle}%</p>
                        <p className="text-md text-black-100 mt-1">{item.type}</p>
                    </div>
                    
                </div>
            );
        })}
    </div>
    );
};
