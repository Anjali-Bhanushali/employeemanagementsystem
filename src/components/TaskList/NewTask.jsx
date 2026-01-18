import React from "react";

const NewTask = ({data}) => {
    return (
      <div className="flex-shrink-0 p-5 h-full w-[300px] bg-emerald-900 rounded-xl">
            <div className=" flex justify-between items-center">
                <h3 className=" bg-slate-600 text-sm  px-3 py-1 rounded">{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
            <p className="text-sm mt-2">{data.description}</p>

            <div className="mt-5">
                <button className="mt-9 w-full text-sm px-2 py-2 bg-sky-500/20 text-sky-400 border border-sky-500 rounded-lg hover:bg-sky-500/30 transition">Accept Task</button>
            </div>
          </div>
    )
}

export default NewTask