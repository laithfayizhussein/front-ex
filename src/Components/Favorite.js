import axios from 'axios';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Moda from './Moda';

export class Favorite extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
        }
    }

    componentDidMount=()=>{
        axios.get(`http://localhost:8080/favorite`).then(response=>{
            this.setState({
                data:response.data,

            })
        })
    }

    deleteHandle=(value,index , event)=>{
        let name = value.name;
event.preventDefault();
axios.delete(`http://localhost:8080/favorite/${name}`).then(response=>{
    this.setState({
        data:response.data
    })}
)
    }

    updateDegimon=async (event , value ,index , userInput)=>{
        let name = value.name;
        let reqbody = {
            level:userInput
        }
await axios.put(`http://localhost:8080/favorite/${name}`,reqbody).then(response=>{
    this.setState({
        data:response.data,
    })
})
    }


    render() {
        return (
            <div>
                {
                this.state.data.map((value , index)=>{
                    return(
                        <>
                        <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={value.img} />
                    <Card.Body>
                      <Card.Title>{value.name}</Card.Title>
                      <Card.Text>
                        {value.level}
                      </Card.Text>
                      <Button variant="primary" onClick={(event)=>this.deleteHandle(value,index,event)}>delete</Button>
                      <Moda 
                      value={value}
                      index={index}
                      updateDegimon={this.updateDegimon}
                      />
                    </Card.Body>
                  </Card>





                        </>
                    )
                })

                }

                
            </div>
        )
    }
}

export default Favorite
