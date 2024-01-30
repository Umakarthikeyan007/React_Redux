import React from "react";
import {useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = ()=>{
    const {tasklist}=useSelector((state)=>state.task)
    return(
        <div>
            <h1 className="text-center my-4 text-primary">To Do Planner</h1>
            <p className="text-center lead">{`Currently ${tasklist.length} task(s) pending`}</p>
        </div>   
    );
}
export default Navbar;