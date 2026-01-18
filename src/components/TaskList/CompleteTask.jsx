import React from "react";

const CompleteTask = ({data}) => {
    return (
      <div className="flex-shrink-0 p-5 h-full w-[300px] bg-emerald-900 rounded-xl">
            <div className=" flex justify-between items-center">
                <h3 className=" bg-slate-600 text-sm  px-3 py-1 rounded">{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
            <p className="text-sm mt-2">{data.description}</p>

            <div>
                <button className="w-full text-sm mt-14 px-2 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-lg hover:shadow-[0_0_12px_rgba(16,185,129,0.3)] transition">Completed Task</button>
            </div>
          </div>
    )
}

export default CompleteTask