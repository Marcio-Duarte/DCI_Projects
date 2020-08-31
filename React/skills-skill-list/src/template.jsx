import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Styles = {
    border: '1px solid',
    padding: '10px',
    margin: '5px',
    borderRadius: '10px',
    background: 'rgb(55, 55, 235)',
    color: 'white',
    fontSize: '1.5em',
}

function Template(props) {
    return <ListGroup.Item style={Styles} >{props.skill}</ListGroup.Item>;
}

export default Template;
