import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Formulario = ({addTask}) => {

  const [task, setTask] = useState('');
  

  return (
    <Form className="margin-form" onSubmit={(e)=>{ 
      e.preventDefault();
        if(task){
          addTask(task)
          setTask("");
        }
      }
    }>
      <Form.Group className="mb-3" controlId="formBasicTask">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text"  value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter task" />
        <Form.Text className="text-muted">
          Please enter a task
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  )
}
