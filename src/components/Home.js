import React, { Component } from 'react'
import axios from 'axios';
import { Card,Button ,Row} from 'react-bootstrap/';
import Item from './Item';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alldrinks: [],
            server: 'http://localhost:3010',
        }
    }
    componentDidMount() {
        const url = `${this.state.server}/getDrink`;
        axios.get(url).then(res => {
            //console.log(res.data);
            this.setState({
                alldrinks: res.data,
            })
        }).catch(error => console.log(error));
    }


    addFavitem = (index)=>{
        const newDrink ={
            strDrinkThumb:this.state.alldrinks[index].strDrinkThumb, 
            strDrink:this.state.alldrinks[index].strDrink, 
        }
        console.log(newDrink);
        const url2='http://localhost:3010/addFav';
        axios.put(url2,newDrink).then(res=>{

        }).catch();
    }

    render() {


        return (
            <div className='container'>
                <Row xs={1} md={3} className="g-3">
                {
                    this.state.alldrinks.length > 0 &&
                    this.state.alldrinks.map((drink, idx) => {
                        return (
                            <div className="col" key={idx.toString()}>
                                <Item 
                                strDrinkThumb={drink.strDrinkThumb}
                                strDrink={drink.strDrink}
                                idx={idx}
                                addFavitem={this.addFavitem}
                                />
                            </div>
                        )
                    })
                }
                </Row>

            </div>
        )
    }
}

export default Home
