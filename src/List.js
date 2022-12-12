import React from 'react'
import Table from 'react-bootstrap/Table';
export const List = ({tasks = [], changeStatus, deleteTask }) => {
  return (
    <div className="table-responsive margin-table">
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Task</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
          {
            tasks?.length && tasks.map( task => 
              
              <tr>
                <td>
                  <div onClick={()=>
                    deleteTask(task.name)
                    } 
                    className={ task.done ? "incorrecto" : null}>
                    {task.name}
                  </div>
                </td>
                <td>{task.done ? "Hecho" : <input type="checkbox" onChange={()=>changeStatus(task.name)}/>}</td>
              </tr>
            )
          }
        </tbody>
        </Table>
    </div>
  )
}
