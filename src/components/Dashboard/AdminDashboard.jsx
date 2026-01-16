import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
import { getLocalStorage } from "../../utils/localStorage";

const AdminDashboard = ({data}) => {
    
    return (
        <div className="h-screen w-full p-7 text-white">
            <Header  role="admin" />
            <CreateTask  />
            <AllTask  />
        </div>
    )
}

export default AdminDashboard