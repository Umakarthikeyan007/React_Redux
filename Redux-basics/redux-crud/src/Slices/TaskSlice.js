import {createSlice} from "@reduxjs/toolkit";

const initialstate ={
  tasklist :[],
  selectedTask : {}
};
let num =0;
const TaskSlice = createSlice({
    name:"taskslice",
    initialState:initialstate,
    reducers:{
        addnewtask:(state,action) =>{
          let id = ++num;
          let task = {...action.payload,id};
          state.tasklist.push(task);
        },
        removetask:(state,action)=>{
          state.tasklist = state.tasklist.filter((task)=>task.id !== action.payload.id);
        },
        updatetask:(state,action)=>{
          state.tasklist = state.tasklist.map ((task)=> task.id === action.payload.id ? action.payload :task);
        },
        setSelectedtask:(state,action)=>{
            state.selectedTask = action.payload;
        }
    }
});

export const {addnewtask, removetask,updatetask,setSelectedtask} =TaskSlice.actions;

export default TaskSlice.reducer;