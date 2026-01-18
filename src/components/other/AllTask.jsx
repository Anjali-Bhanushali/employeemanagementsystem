import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

    const authData = useContext(AuthContext)

    return(
       <div className="bg-[1c1c1c] p-5 mt-5 rounded h-48 overflow-auto ">
            {authData?.employees?.map((employees)=>{
                return <div className="bg-emerald-600 mb-2 py-2 px-4 flex justify-between rounded">
                <h2>{employees.name}</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
                </div>
            })}
       </div>
    )
}

export default AllTask