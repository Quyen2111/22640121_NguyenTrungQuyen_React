import React from "react";

export const Layout = () =>{
   return(
    <div class="grid grid-cols-[1fr_3fr] gap-1 p-1 bg-blue-500 h-screen">

        <div class="bg-white bg-opacity-80 p-2 text-center ">
        <a href="#" class="block">Link 1</a>
        <a href="#" class="block">Link 2</a>
        <a href="#" class="block">Link 3</a>
        </div>
  
        <div class="grid grid-rows-[1fr_1fr_5fr] gap-1 h-screen">

            <div class="bg-white bg-opacity-80 p-2 text-center flex items-center justify-center">
                <h2 class="text-xl font-bold">My Header</h2>
            </div>
    
            <div class="bg-white bg-opacity-80 p-2 text-center flex items-center justify-center">
                <p>
                NOIDUNG
                </p>
            </div>
    
            <div class="bg-white bg-opacity-80 p-2 text-center flex items-center justify-center">
                <h4 class="text-md font-medium">Footer</h4>
            </div>
        </div>
  </div>
   )
}