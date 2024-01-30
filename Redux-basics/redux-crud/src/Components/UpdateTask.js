import React,{useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { updatetask } from "../Slices/TaskSlice";


const UpdateTask = (props) => {

    const {selectedTask}=useSelector((state)=>state.task);
    const [task,setTask] = useState("");
    const [description,setDescription]=useState("");
    const [id,setId]=useState(0);
    const dispatch=useDispatch();

    const updatedtask = ()=>{
        props.onHide();
        dispatch(updatetask({id,task,description}));
    }

    useEffect(()=>{
        if(Object.keys(selectedTask).length !==0){
      setTask(selectedTask.task);
      setDescription(selectedTask.description);
      setId(selectedTask.id);
        }
    },[selectedTask]);

   
    return (
        <div>
          <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Task</Form.Label>
                    <Form.Control type="text" placeholder="Enter task" value={task} onChange={(e)=>setTask(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter task description" value={description} onChange={(e)=>setDescription(e.target.value)} />
                </Form.Group>
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-end">
                <Button variant="primary" type="submit" onClick={(e)=>updatedtask(e)}>
                    Update Task
                </Button>
                </div>
      </Modal.Footer>
    </Modal>
        </div>
    );
}
export default UpdateTask;