import React, { Component } from 'react'
import { Card,Button ,Row} from 'react-bootstrap/';
export class FavItem extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={this.props.strDrinkThumb} />
                                <Card.Body>
                                    <Card.Title>{this.props.strDrink}</Card.Title>
                                
                                    <Button variant="primary" onClick={()=>this.props.showFormf(this.props.idx)}>update</Button>
                                    <Button variant="primary" onClick={()=>this.props.deleteFav(this.props.idx)}>delete</Button>
                                </Card.Body>
                            </Card>
            </div>
        )
    }
}

export default FavItem
