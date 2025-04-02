import React from "react";
import { LayAPI } from "./LayAPI";

export const Layout = () =>{
   return(
    <div class="grid grid-cols-[1fr_3fr] gap-1 p-1 bg-blue-500 h-screen">

        <div class="bg-white bg-opacity-80 p-2 text-center ">
        <a href="#" class="block">Link 1</a>
        <a href="#" class="block">Link 2</a>
        <a href="#" class="block">Link 3</a>
        </div>
  
        <div class="grid grid-rows-[0.5fr_2fr_5fr] gap-1 h-screen">

            <div class="bg-white bg-opacity-80 p-2 text-center flex ">
                <h2 class="text-xl font-bold text-pink-500">Dashboard</h2>
                <input type="text" placeholder="search..." class="px-9 py-2 w-full sm:w-auto border border-gray-300 rounded-lg ml-190 "></input>
            </div>
    
            <div class="bg-white bg-opacity-80 p-2 ">
                <div>
                    <h1 class="text-xl font-bold text-pink-500">
                        Overview
                    </h1>
                </div>
                <LayAPI/>
            </div>
    
            <div class="bg-white bg-opacity-80 p-2 text-center flex items-center justify-center">
                <h4 class="text-md font-medium">Footer</h4>
            </div>
        </div>
  </div>
   )
}