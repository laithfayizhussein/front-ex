import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export class Moda extends Component {
    constructor(props){
        super(props);
        this.state={
            modalStatus:false,
            userInput:''
        }
    }
    render() {
        return (
           <>
            <Button variant="primary" onClick={()=>{this.setState({modalStatus:true})}}>update</Button>


            <Modal show={this.state.modalStatus}>
  <Modal.Header >
    <Modal.Title>update level</Modal.Title>
  </Modal.Header>
  <Modal.Body>


  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>level</Form.Label>
    <Form.Control type="text" placeholder="level"   onChange={(e)=>{this.setState({userInput:e.target.value})}}/> 
  </Form.Group>
</Form>

  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={()=>this.setState({modalStatus:false})}>
      Close
    </Button>
    <Button variant="primary" onClick={(event)=>{this.setState({modalStatus:false}) ; this.props.updateDegimon(event , this.props.value, this.props.index,this.state.userInput)}}>
      Save
    </Button>
  </Modal.Footer>
</Modal>
</>
        )
    }
}

export default Moda
