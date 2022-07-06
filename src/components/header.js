import React from "react";

function Header(){

    const currentDate = new Date().toDateString();

    return(
        <div className="bg-cyan-300 h-16 w-80 py-4 text-center text-2xl font-bold font-mono rounded-lg border border-solid">
           <h1>{currentDate}</h1> 
        </div>
    )
}
export default Header;