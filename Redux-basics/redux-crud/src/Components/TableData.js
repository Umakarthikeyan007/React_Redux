import React,{useState} from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import UpdateTask from "./UpdateTask";
import {useSelector } from "react-redux/es/hooks/useSelector";
import {  setSelectedtask,removetask } from "../Slices/TaskSlice";
import { useDispatch } from "react-redux";
const TableData = () => {

  const {tasklist}=useSelector((state)=>state.task);
  const dispatch = useDispatch();
  const updateTask= (task)=>{
    setModalShow(true);
    dispatch(setSelectedtask(task));
  }
  const deleteTask= (task)=>{
    dispatch(removetask(task));
  }
  const [modalShow,setModalShow]=useState(false);
    return(
        <div>
             <Table striped bordered hover>
      <thead>
        <tr className="text-center">
          <th>#</th>
          <th>Task</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          tasklist && tasklist.map((task,index)=>{
           return  <tr className="text-center" key={task.id}>
            <td>{index+1}</td>
            <td>{task.task}</td>
            <td>{task.description}</td>
            <td> <Button variant="primary" className="mx-3" onClick={()=>updateTask(task)}><i className="bi bi-pencil"></i></Button>
                 <Button variant="primary" onClick={()=>deleteTask(task)}><i className="bi bi-trash3"></i></Button>
                 </td>
          </tr>
          })
        }
        
      </tbody>
    </Table>
    <UpdateTask
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
    );
}
export default TableData;