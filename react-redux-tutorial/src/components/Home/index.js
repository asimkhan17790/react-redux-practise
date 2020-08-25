import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Col, Row } from 'react-bootstrap';
import MyButton from './MyButton';
import Display from './Display';
export default function Home() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
    return (
    <Container fluid>
      <Row>
          <Col>
                <MyButton increment = {1} onClickFunction = {incrementCounter}/>
                <MyButton increment = {5} onClickFunction = {incrementCounter}/>
                <MyButton increment = {10} onClickFunction = {incrementCounter}/>
                <MyButton increment = {50} onClickFunction = {incrementCounter}/>
                <MyButton increment = {100} onClickFunction = {incrementCounter}/>
          </Col>
          <Col>
                <Display message={counter}/>
          </Col>
      </Row>
    </Container>
    );
}


