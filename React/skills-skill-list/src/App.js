import React, { useState } from 'react';
import Template from './template'
import AddSkill from './addSkill'
import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap'

const Styles = {
  border: '1px solid gray',
  margin: '20px',
  padding: '20px',
  borderRadius: '15px'
}
const NavStyles = {
  background: 'rgb(59, 54, 54)',
  color: 'white',
  textAlign: 'center',

}

function App() {
  const [skills, setSkills] = useState([]);

  const addSkill = (skill) => {
    const newSkills = [...skills, skill];
    setSkills(newSkills);
  };

  return (
    <div className="App">
      <nav style={NavStyles}>
        <h1>Personal Skills List</h1>
      </nav>

      <Container>
        <Row>
          <Col style={Styles}>
            <nav style={{ background: 'gray', color: 'white', borderRadius: '10px', height: '3.5em', padding: '2px' }}><h2>Added Skills</h2></nav>
            <ListGroup>
              {skills.map((skill, index) => {
                return <Template key={index} skill={skill} />
              })}
            </ListGroup>
          </Col>
          <Col>
            <AddSkill handleAddSkill={addSkill} skills={skills} />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
