import React , {useState} from "react";
import {useSelector , useDispatch} from "react-redux";
import {increment , decrement , incByAmt, reset} from "./counterSlice";
const Counter =()=>{
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [amt,setAmt]=useState(0);
    const addval = Number(amt) || 0;
    const resetAll =()=>{
        setAmt(0);
        dispatch(reset);
    }
    return(
        <div>
           <h1>{count}</h1>
           <div>
            <button onClick ={()=>dispatch(increment())}>+</button>
            <button onClick = {()=>dispatch(decrement())}>-</button>
            <div>
             <input type="text" value={amt} onChange={(e)=>setAmt(e.target.value)}/>
             <div>
                <button onClick={()=>dispatch(incByAmt(addval))}>Add Amount</button>
                <button onClick={resetAll}> Reset</button>

             </div>
            </div>
           </div>
        </div>
    );
}
export default Counter;