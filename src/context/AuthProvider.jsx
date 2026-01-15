import React, { createContext } from "react";

export  const AuthContext = createContext()

const AuthProvider = ({children}) => {
    return (
      <div className="text-white">
        <AuthContext.Provider value={"Anjali"}>
            {children}
        </AuthContext.Provider>
      </div>
    )
}

export default AuthProvider