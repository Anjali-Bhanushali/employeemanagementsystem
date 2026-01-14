import React from "react";

const Header = () => {
    return(
      <div className="text-white flex items-end justify-between">
       <h1 className="text-2xl font-medium">Hello <br /><span className="text-3xl font-semibold"> Anjali 👋</span> </h1>
       <button className="bg-red-600 text-white text-lg font-medium px-5 py-3 rounded-sm">Log out</button>
      </div>
    )
}

export default Header