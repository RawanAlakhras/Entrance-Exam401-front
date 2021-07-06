import axios from 'axios'
import React, { Component } from 'react'
import { Modal, Button,Form } from 'react-bootstrap/';
import FavItem from './FavItem'

export class Fav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favdrinks: [],
            server: 'http://localhost:3010',
            showForm: false,
            index: 0,
            strDrinkThumb: '',
            strDrink: '',


        }
    }
    componentDidMount() {
        const url = `${this.state.server}/getFav`;
        axios.get(url).then(data => {
            this.setState({
                favdrinks: data.data,
            })
        }).catch();
    }
    updateFav = (e) => {
        e.preventDefault();
        const obj={
            strDrinkThumb:e.target.strDrinkThumb.value,
            strDrink:e.target.strDrink.value,
            id:this.state.favdrinks[this.state.index]._id,
        }
        const url= `${this.state.server}/updateFav`;
        axios.put(url,obj).then(data =>{
            this.setState({
                favdrinks: data.data,
            })
        }).catch();

    }
    showFormf = (index) => {
        this.setState({
            showForm: true,
            index: index,
            strDrinkThumb: this.state.favdrinks[index].strDrinkThumb,
            strDrink: this.state.favdrinks[index].strDrink,
        })
    }
    deleteFav = (index) => {
        const obj = {
            id: this.state.favdrinks[index]._id,
        }
        const url = `${this.state.server}/deleteFav`;
        axios.delete(url, { params: obj }).then(data => {
            this.setState({
                favdrinks: data.data,
            })
        }).catch();

    }
    handleClose = () => {
        this.setState({
            showForm: false,
        })
    }

    render() {
        return (
            <div>
                {this.state.favdrinks.length > 0 &&
                    this.state.favdrinks.map((data, indx) => {
                        return (
                            <FavItem
                                strDrinkThumb={data.strDrinkThumb}
                                strDrink={data.strDrink}
                                idx={indx}

                                deleteFav={this.deleteFav}
                                showFormf={this.showFormf}
                            />
                        )
                    })}
                <Modal show={this.state.showForm} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>update</Modal.Title>
                    </Modal.Header>
                   
                        <Form onSubmit={(e)=>this.updateFav(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>img url </Form.Label>
                                <Form.Control type="text" placeholder="img url "defaultValue={this.state.strDrinkThumb} name='strDrinkThumb' />
                               
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>name</Form.Label>
                                <Form.Control type="text" placeholder="name " defaultValue={this.state.strDrink} name='strDrink' />
                            </Form.Group>
                           
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                
            </div>
                )
    }
}

                export default Fav
