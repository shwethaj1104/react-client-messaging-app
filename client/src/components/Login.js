import React, { useRef } from 'react';
import { Container,Form,Button} from 'react-bootstrap';
import {v4 as uuidV4} from 'uuid';

export default function Login({onIdSubmit}) {
    const idRef = useRef();
    function handleSubmit(e){
        e.preventDefault();
        onIdSubmit(idRef.current.value)
    }
    function createNewId(){
        onIdSubmit(uuidV4());
    }
  return (
        <Container className='align-items-center login-container'>
        <h3 className='login-container__header'>Login</h3>
            <Form className='w-100 login-container__form' onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control className='login-container__form-control' type='text' ref={idRef} required></Form.Control>
                </Form.Group>
                <Button className="login-container__button" type='submit' >Submit</Button>
                <Button className="login-container__button" onClick={createNewId} variant='secondary'>Create a New Id</Button>
            </Form>

        </Container>
  )
}
