import './App.css';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Formulario} from './Formulario'
import { List } from './List';

function App() {
  return (
    <Container fluid >
      <header className="text-center">
          <h1>Testing github codespaces with todo app</h1>
      </header>
      <div className="container">
      <Row>
        <Col>
          <Formulario />
        </Col>
        <Col>
          <List />
        </Col>
      </Row>
      </div>
    </Container>
  );
}

export default App;
