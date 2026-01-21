import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
     

    return(
        

       <div className="bg-[1c1c1c] p-5 mt-5 rounded  ">
            <div className=" border-2 border-black  bg-emerald-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="text-lg font-medium  w-1/5 h-10 text-center ">Employee Name</h2>
                <h3 className="text-lg font-medium  w-1/5 h-10 text-center   ">New Task</h3>
                <h5 className=" text-lg font-medium w-1/5 h-10 text-center   ">Completed</h5>
                <h5 className="text-lg font-medium  w-1/5 h-10 text-center   ">Active</h5>
                <h5 className=" text-lg font-medium w-1/5 h-10 text-center   ">Failed</h5>
            </div> 
            <div >
             {userData?.map((employees )=>{
                 return <div key={employees.id}  className="border-2 border-emerald-500 bg-black mb-2 py-2 px-4 flex justify-between rounded">
                     <h2  className="text-lg font-medium w-1/5 h-8 text-center ">{employees.name}</h2>
                     <h3 className="text-lg font-medium w-1/5 h-8 text-center ">  {employees.taskCount.newTask}</h3>
                     <h5 className="text-lg font-medium w-1/5 h-8 text-center ">{employees.taskCount.completed}</h5>
                     <h5 className="text-lg font-medium w-1/5 h-8 text-center ">{employees.taskCount.active}</h5>
                     <h5 className="text-lg font-medium w-1/5 h-8 text-center ">{employees.taskCount.failed}</h5>
                   </div>
                })}
            </div>
        </div>
    )
}

export default AllTask