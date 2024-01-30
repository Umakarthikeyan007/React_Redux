import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { addnewtask } from "../Slices/TaskSlice";
import { useDispatch } from "react-redux";

const AddTask = () => {

    const [task,setTask] = useState("");
    const [description,setDescription]=useState("");
    const dispatch = useDispatch();

    const addtask = (e)=>{
      e.preventDefault();
      dispatch(addnewtask({task,description}))
      setTask("");
      setDescription("");
    }

    return (
        <div className="container my-5">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Task</Form.Label>
                    <Form.Control type="text" placeholder="Enter task" value={task} onChange={(e)=>setTask(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter task description" value={description} onChange={(e)=>setDescription(e.target.value)} />
                </Form.Group>
                <div className="text-end">
                <Button variant="primary" type="submit" onClick={(e)=>addtask(e)}>
                    Add Task
                </Button>
                </div>
            </Form>
        </div>
    );
}
export default AddTask;