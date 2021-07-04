import react from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends react.Component{

    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }

    componentDidMount=()=>{
        axios.get(`http://localhost:8080/degimon`).then(response=>{
            this.setState({
                data:response.data,
            })
        })
    }


    addFavorite=(value,event)=>{
event.preventDefault();
        let reBody={
                name:value.name,
                level:value.level,
                img:value.img
        };
        axios.post(`http://localhost:8080/favorite`,reBody)
    }
    render(){
        return(
            this.state.data.map(value => {
                return(
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={value.img} />
                    <Card.Body>
                      <Card.Title>{value.name}</Card.Title>
                      <Card.Text>
                        {value.level}
                      </Card.Text>
                      <Button variant="primary" onClick={(event)=>this.addFavorite(value,event)}>Add to favorite</Button>
                    </Card.Body>
                  </Card>
                )
            })
        )
    }
}

export default Main;