import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";



const TaskList = ({data}) => {
    console.log(data)
    return (
      <div id="tasklist" className=" text-white flex items-center overflow-x-auto justify-start gap-5  mt-10   h-[55%] py-5 w-full rounded-lg flex-nowrap">
         
         {data.tasks.map((elem)=>{
            
            if(elem.newTask){
               return <NewTask /> 
            }
            if(elem.active){
               return <AcceptTask /> 
            }
            if(elem.completed){
                return <CompleteTask />
            }
            if(elem.failed){
                return <FailedTask />
            }
         })}
        </div>
    )
}

export default TaskList