import React from "react";

const TaskListNumbers = () =>{
    return (
       <div className="flex  text-white mt-10 justify-between gap-5 screen">
        <div className="rounded-xl py-6 px-9 w-[45%] p-10 bg-emerald-900">
           <h2 className="text-3xl font-semibold">0</h2>
           <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="rounded-xl py-6 px-9 w-[45%] p-10 bg-emerald-900">
           <h2 className="text-3xl font-semibold">0</h2>
           <h3 className="text-xl font-medium">Completed</h3>
        </div>
        <div className="rounded-xl py-6 px-9 w-[45%] p-10 bg-emerald-900">
           <h2 className="text-3xl font-semibold">0</h2>
           <h3 className="text-xl font-medium">Accepted</h3>
        </div>
        <div className="rounded-xl py-6 px-9 w-[45%] p-10 bg-emerald-900">
           <h2 className="text-3xl font-semibold">0</h2>
           <h3 className="text-xl font-medium">Failed</h3>
        </div>
       </div>
    )
}

export default TaskListNumbers