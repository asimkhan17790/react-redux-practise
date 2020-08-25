import React from 'react';
import Button from 'react-bootstrap/Button';
export default function MyButton(props) {
    const handleClick = () => props.onClickFunction(props.increment);
    return (<Button variant="primary" onClick={handleClick} > + { props.increment } </Button>);
}
