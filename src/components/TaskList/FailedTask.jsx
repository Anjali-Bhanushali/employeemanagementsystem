import React from "react";

const FailedTask = () => {
    return (
       <div className="flex-shrink-0 p-5 h-full w-[300px] bg-emerald-900 rounded-xl">
            <div className=" flex justify-between items-center">
                <h3 className=" bg-slate-600 text-sm  px-3 py-1 rounded">High</h3>
                <h4 className="text-sm">20 feb 2024</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam a nemo ipsa molestiae? Dolorum, cum!</p>

            <div className="mt-5">
                <button className="mt-9 w-full text-sm px-2 py-2 bg-rose-500/20 text-rose-400 border border-rose-500 rounded-lg hover:bg-rose-500/30 transition">Failed</button>
            </div>
          </div>
    )
}
export default FailedTask