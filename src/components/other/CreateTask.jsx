import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";


const CreateTask = () =>{

const [userData,setUserData] = useContext(AuthContext)

const [taskTitle, setTitle] = useState("");
const [taskDate, setDate] = useState("");
const [taskAssignTo, setAssignTo] = useState("");
const [taskCategory, setCategory] = useState("");
const [taskDescription, setDescription] = useState("");



const submitHandler = (e) =>{
    e.preventDefault()

    
  const taskObj = {
   title: taskTitle,
   assignTo: taskAssignTo,
    date:taskDate,
    category:taskCategory,
   description: taskDescription,
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  };
    
   //  const data = userData

   //  userData.forEach(function(elem){
   //     if(taskAssignTo == elem.name){
   //      elem.tasks.push(taskObj)
   //      elem.taskCount.newTask =  (elem.taskCount.newTask) + 1
   //     }
   //  })

   
   //  setUserData(updateduserData)

   const updatedUserData = userData.map((user) => {
    if (user.name === taskAssignTo) {
      return {
        ...user,
        tasks: [...user.tasks, taskObj],
        taskCount: {
          ...user.taskCount,
          newTask: user.taskCount.newTask + 1,
        },
      };
    }
    return user;
  });

    setUserData(updatedUserData);
    console.log(updatedUserData);

    setTitle("")
    setCategory("")
    setAssignTo("")
    setDate("")
    setDescription("")
}
   return (
         <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
                <form 
                onSubmit={submitHandler}
                className="flex flex-wrap w-full items-start justify-between">
                    <div className="w-1/2 ">
                        <div>
                           <h3 className=" text-sm text-gray-300 mb-0.5">Task Title</h3>
                           <input
                            value={taskTitle} 
                            onChange={(e)=>{
                              setTitle(e.target.value)
                           }}  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a UI design" />
                        </div>
                        <div>
                           <h3 className=" text-sm text-gray-300 mb-0.5">Date</h3>
                           <input  value={taskDate} 
                            onChange={(e)=>{
                              setDate(e.target.value)
                           }}  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="Date" />
                        </div>
                        <div>
                           <h3 className=" text-sm text-gray-300 mb-0.5">Assign To</h3>
                           <input  value={taskAssignTo} 
                            onChange={(e)=>{
                              setAssignTo(e.target.value)
                           }}  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Employee Name" />
                        </div>
                        <div>
                           <h4 className=" text-sm text-gray-300 mb-0.5">Category</h4>
                           <input  value={taskCategory} 
                            onChange={(e)=>{
                              setCategory(e.target.value)
                           }}  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design,dev,etc" />
                        </div>
                    </div>
                   
                    <div className="w-1/2 ">
                        <h3 className=" text-sm text-gray-300 mb-0.5">Description</h3>
                        <textarea  value={taskDescription} 
                            onChange={(e)=>{
                              setDescription(e.target.value)
                           }}  className="text-sm py-1 px-2  rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 w-full" name="" id="" cols={30} rows={10}></textarea>
                        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ">Create Task</button>
                    </div> 
                </form>
            </div>
    )
}

export default CreateTask