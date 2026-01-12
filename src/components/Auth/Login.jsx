import React from "react";

const Login = () => {

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("hello guyss, form submitted")
    }


    return (
     <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-red-600 p-20 border-emerald-600 ">
         <form onSubmit={(e) => {
            submitHandler(e)
         }} className="flex flex-col items-center justify-center">
            <input required className="text-white bg-transparent  outline-none border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-grey-400" type="email" placeholder="Enter your email" />
            <input required className="text-white bg-transparent  outline-none border-2 border-emerald-600 rounded-full mt-10 py-3 px-5 text-xl placeholder:text-grey-400" type="password" placeholder="Enter your password" />
            <button className="text-white  outline-none  bg-emerald-600 rounded-full mt-5 py-3 px-5 text-xl placeholder:text-white"  >Log in</button>
         </form>
      </div>
    </div>
    )
}

export default Login
