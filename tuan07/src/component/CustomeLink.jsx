import React from "react";
import { Link } from "react-router-dom";  // Thêm Link
import Squaresfour1 from "../image/Squares four 1.png";
import Folder from "../image/Folder.png";
import Team from "../image/Groups.png";
import PieChart from "../image/Pie chart.png";
import Chat from "../image/Chat.png";
import Code from "../image/Code.png";
import Logo1 from "../image/Group.png";

export const CustomLink = () => {
    return (
        <div className="flex flex-col py-5">

            <Link to="/customdatapage" className="flex items-center space-x-2 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:bg-pink-500 hover:text-white ">
                <img src={Squaresfour1} alt="" className="w-[30px] h-[25px]" />
                <p className="text-sm font-bold">Dashboard</p>
            </Link>

            <Link to="/projects" className="flex items-center space-x-2 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:bg-pink-500 hover:text-white ">
                <img src={Folder} alt="" className="w-[30px] h-[25px]" />
                <p className="text-sm font-bold">Projects</p>
            </Link>

            <Link to="/teams" className="flex items-center space-x-2 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:bg-pink-500 hover:text-white">
                <img src={Team} alt="" className="w-[30px] h-[25px]" />
                <p className="text-sm font-bold">Teams</p>
            </Link>

            <Link to="/analytics" className="flex items-center space-x-2 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:bg-pink-500 hover:text-white">
                <img src={PieChart} alt="" className="w-[30px] h-[25px]" />
                <p className="text-sm font-bold">Analytics</p>
            </Link>

            <Link to="/messages" className="flex items-center space-x-2 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:bg-pink-500 hover:text-white">
                <img src={Chat} alt="" className="w-[30px] h-[25px]" />
                <p className="text-sm font-bold">Messages</p>
            </Link>

            <Link to="/integrations" className="flex items-center space-x-2 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:bg-pink-500 hover:text-white">
                <img src={Code} alt="" className="w-[30px] h-[25px]" />
                <p className="text-sm font-bold">Integrations</p>
            </Link>

            <div className="flex flex-col items-center justify-center mt-10 bg-blue-200 mx-5">
                <img src={Logo1} alt="" className="w-[250px] h-[300px] py-5" />

                <button className="px-10 py-2 border-2 border-blue-500 text-blue-500 bg-white rounded-lg hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                    Try now
                </button>
            </div>
        </div>
    );
};
