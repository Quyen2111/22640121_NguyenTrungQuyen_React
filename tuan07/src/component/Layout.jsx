import React from "react";
import { LayAPI } from "./LayAPI";
import Squaresfour from "../image/Squares four 1.png";
import Search from "../image/Search.png"
import Bell from "../image/Bell 1.png"
import Question from "../image/Question 1.png"
import Avatar from "../image/Avatar 313.png"
import FileText from "../image/File text 1.png"
import Logo from "../image/Image 1858.png"
import { CustomDataTable } from "./CustomDataTable";
import { CustomLink } from "./CustomeLink";
import Download from "../image/Download.png"
import Moveup from "../image/Move up.png"



export const Layout = () =>{
   return(
    <div className="grid grid-cols-[1fr_3fr] gap-1 p-1 bg-gray-200 min-h-screen">

        <div className="bg-white bg-opacity-80 p-2 text-center ">
            <div className="flex flex-col">
            <img src={Logo} alt="" className="px-2 w-[150px] h-[40px]" />
            {/* <CustomLink/> */}
            </div>
        </div>
  
        <div className="grid grid-rows-[0.5fr_2fr_5fr] gap-1 h-screen">

            <div className="bg-white bg-opacity-80 p-2 text-center flex ">
                <h2 className="text-xl font-bold text-pink-500">Dashboard</h2>
                <div className="flex ml-auto relative w-full sm:w-auto">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <img src={Search} alt="search" className="w-5 h-5" />
                    </span>
                    <input type="text" placeholder="search..." className="pl-10 px-30 py-2 border border-gray-300 rounded-lg "></input>
                    <button onClick={() => console.log(`Clicked image ${Bell}`)}>
                         <img src={Bell} alt="" className="px-2 w-[40px] h-[25px]" />
                     </button>
                     <button onClick={() => console.log(`Clicked image ${Question}`)}>
                         <img src={Question} alt="" className="px-2 w-[40px] h-[25px]" />
                     </button>
                     <button onClick={() => console.log(`Clicked image ${Avatar}`)}>
                         <img src={Avatar} alt="" className="px-2 w-[40px] h-[25px]" />
                     </button>
                </div>

            </div>
    
            <div className="bg-white bg-opacity-80 p-2 ">
                <div className="flex">
                    <img src={Squaresfour} alt="" className="px-2 w-[40px] h-[25px]"/>
                    <h1 className="text-xl font-bold ">
                        Overview
                    </h1>
                </div>
                <LayAPI/>
            </div>
    
            <div className="flex-col bg-white bg-opacity-80 p-2 ">
                <div className="flex">
                    <img src={FileText} alt="" className="px-2 w-[40px] h-[25px]"/>
                    <h4 className="text-xl font-bold">Detailed report</h4>
                    <div className="flex ml-auto items-center">  
                        <button className="flex items-center px-5 py-2 border-2 border-pink-500 text-white-500 bg-white rounded-lg hover:bg-pink-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-200 focus:ring-offset-2 mr-2">
                            <img src={Download} alt="" className="px-1 w-[30px] h-[25px]" />
                            <p className="text-pink-500 ml-2">import</p> 
                        </button>
                        <button className="flex items-center px-5 py-2 border-2 border-pink-500 text-white-500 bg-white rounded-lg hover:bg-pink-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-200 focus:ring-offset-2">
                            <img src={Moveup} alt="" className="px-1 w-[30px] h-[25px]" />
                            <p className="text-pink-500 ml-2">Export</p> 
                        </button>
                    </div>
                  
                </div>
                <CustomDataTable/>
            </div>
        </div>
  </div>
   )
}