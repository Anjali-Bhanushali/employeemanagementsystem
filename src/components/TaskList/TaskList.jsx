import React from "react";


const TaskList = ({data}) => {
    return (
      <div id="tasklist" className=" text-white flex items-center overflow-x-auto justify-start gap-5  mt-10   h-[55%] py-5 w-full rounded-lg flex-nowrap">
         <div className="flex-shrink-0 p-5 h-full w-[300px] bg-emerald-900 rounded-xl">
            <div className=" flex justify-between items-center">
                <h3 className=" bg-slate-600 text-sm  px-3 py-1 rounded">{data.tasks.category}</h3>
                <h4 className="text-sm">{data.tasks.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.tasks.title}</h2>
            <p className="text-sm mt-2">{data.tasks.description}</p>
          </div>
         <div className="flex-shrink-0 p-5 h-full w-[300px] bg-emerald-900 rounded-xl">
            <div className=" flex justify-between items-center">
                <h3 className=" bg-slate-600 text-sm  px-3 py-1 rounded">High</h3>
                <h4 className="text-sm">20 feb 2024</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam a nemo ipsa molestiae? Dolorum, cum!</p>
          </div>
         <div className="flex-shrink-0 p-5 h-full w-[300px] bg-emerald-900 rounded-xl">
            <div className=" flex justify-between items-center">
                <h3 className=" bg-slate-600 text-sm  px-3 py-1 rounded">High</h3>
                <h4 className="text-sm">20 feb 2024</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam a nemo ipsa molestiae? Dolorum, cum!</p>
          </div>
         <div className="flex-shrink-0 p-5 h-full w-[300px] bg-emerald-900 rounded-xl">
            <div className=" flex justify-between items-center">
                <h3 className=" bg-slate-600 text-sm  px-3 py-1 rounded">High</h3>
                <h4 className="text-sm">20 feb 2024</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam a nemo ipsa molestiae? Dolorum, cum!</p>
          </div>
         <div className="flex-shrink-0 p-5 h-full w-[300px] bg-emerald-900 rounded-xl">
            <div className=" flex justify-between items-center">
                <h3 className=" bg-slate-600 text-sm  px-3 py-1 rounded">High</h3>
                <h4 className="text-sm">20 feb 2024</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam a nemo ipsa molestiae? Dolorum, cum!</p>
          </div>
         <div className="flex-shrink-0 p-5 h-full w-[300px] bg-emerald-900 rounded-xl">
            <div className=" flex justify-between items-center">
                <h3 className=" bg-slate-600 text-sm  px-3 py-1 rounded">High</h3>
                <h4 className="text-sm">20 feb 2024</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam a nemo ipsa molestiae? Dolorum, cum!</p>
          </div>
        </div>
    )
}

export default TaskList