import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import skillList from './data/skills';

function AddSkill(props) {
  const [skill, setSkill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.skills.includes(skill.trim())) {
      alert(`The list already has this ${skill} !!!`);
      setSkill('');
    } else if (!skill.trim()) {
      alert('Please enter a valid Skill !!!');
    } else {
      props.handleAddSkill(skill);
      setSkill('');
    }
  };

  // This function reads the input and returns suggestions based on the entered characters.
  const handleSearchInput = () => {
    return skillList
      .filter(
        (text) =>
          text.toLowerCase().startsWith(skill.toLowerCase()) &&
          skill !== '' &&
          skill !== text
      )
      .map((text, i) => {
        return (
          <ListGroup.Item
            key={i}
            onClick={(e) => {
              setSkill(e.target.innerText);
              console.log(e.target);
            }}
            style={{ cursor: 'pointer' }}
          >
            {text}
          </ListGroup.Item>
        );
      });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        border: '1px solid gray',
        margin: '20px',
        padding: '20px',
        borderRadius: '15px',
      }}
    >
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Add Skill</Form.Label>
        <Form.Control
          value={skill}
          type='text'
          placeholder=''
          onChange={(e) => {
            setSkill(e.target.value);
          }}
        />
        <Form.Text className='text-muted'>
          Start typing to see suggestions.
        </Form.Text>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
      <ListGroup style={{ marginTop: '10px' }}>{handleSearchInput()}</ListGroup>
    </Form>
  );
}

export default AddSkill;
