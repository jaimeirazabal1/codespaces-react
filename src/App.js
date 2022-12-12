import './App.css';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Formulario} from './Formulario'
import { List } from './List';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(false);
  
  useEffect(()=>{
    if(!load){
      loadTasks()
      setLoad(true)
    }
    console.log('tasks',tasks)
  },[tasks])


  const getTasks = () => {
    let ts = JSON.parse(window.localStorage.getItem('tasks_effective-orbit-4g5xrg976x3xw.github'))
    if(!ts){
      return [];
    }
    return ts
  }
  const loadTasks = () => {
    setTasks(getTasks());
  }
  const deleteTask = (task) =>{
    let ts = getTasks()
    for( let i = 0; i<ts.length;i++){
      console.log('ts[i].name == task',ts[i].name, task)
      if(ts[i].name == task){
    
        ts.splice(i, 1)
      }
    }
 
    setTasks(ts);

    window.localStorage.setItem('tasks_effective-orbit-4g5xrg976x3xw.github',JSON.stringify(ts))
    setLoad(false)
  }
  const changeStatus = (task) => {
    let ts = getTasks()
    for( let i = 0; i<ts.length;i++){
      console.log('ts[i].name == task',ts[i].name, task)
      if(ts[i].name == task){
        ts[i].done = true;
      }
    }
    setTasks(ts);

    window.localStorage.setItem('tasks_effective-orbit-4g5xrg976x3xw.github',JSON.stringify(ts))
    setLoad(false)
  }
  const addTask = (task) => {
    let ts = getTasks()
    ts.push({
      name:task,
      done:false
    })

    setTasks(ts);
    window.localStorage.setItem('tasks_effective-orbit-4g5xrg976x3xw.github',JSON.stringify(ts))
    setLoad(false)
  }

  return (
    <Container fluid >
      <header className="text-center">
          <h1>Testing github codespaces with todo app</h1>
      </header>
      <div className="container">
      <Row>
        <Col>
          <Formulario addTask={addTask}/>
        </Col>
        <Col>
          <List tasks={tasks} changeStatus={changeStatus} deleteTask={deleteTask}/>
        </Col>
      </Row>
      </div>
    </Container>
  );
}

export default App;
