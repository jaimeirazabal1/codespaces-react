import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Formulario = () => {
  return (
    <Form className="margin-form">
      <Form.Group className="mb-3" controlId="formBasicTask">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Enter task" />
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
