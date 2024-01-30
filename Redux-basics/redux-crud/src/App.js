import './App.css';
import AddTask from './Components/AddTask';
import Navbar from './Components/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TableData from "./Components/TableData";

function App() {
  return (
    <div>
      <Navbar />
      <Row className="justify-content-md-center">
        <Col xs lg="4">
          <AddTask />
          <TableData/>
        </Col>   
       </Row>
    </div>
  );
}

export default App;
