import React from "react";

const AcceptTask = ({data}) => {
    return (
      <div className="flex-shrink-0 p-5 h-full w-[300px] bg-emerald-900 rounded-xl">
            <div className=" flex justify-between items-center">
                <h3 className=" bg-slate-600 text-sm  px-3 py-1 rounded">{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
            <p className="text-sm mt-2">{data.description}</p>

            <div className="flex justify-between mt-4">
                <button className="text-sm mt-5 px-2 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500 rounded-lg hover:bg-emerald-500/30 transition"> Mark as Completed </button>
                <button  className="text-sm mt-5 px-2 py-2 bg-rose-500/20 text-rose-400 border border-rose-500 rounded-lg hover:bg-rose-500/30 transition">Mark as Failed</button>
            </div>
          </div> 
    )
}

export default AcceptTask