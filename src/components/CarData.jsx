import React, { Component } from 'react';
import axios from 'axios';
import Credits from './Credits';
import keys from '../config/keys';

class CarData extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            credits: ''
        }

    }

    componentDidMount() {
        axios.get('http://api.carmd.com/v3.0/credits', {
            headers: {
                "content-type":"application/json",
                "authorization":keys.AUTH_KEY,
                "partner-token":keys.PARTNER_TOKEN
            }
        })
        .then(res => {
            this.setState({ credits : res.data })
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    // mapCredits() {
    //     return this.state.credits.map((data, i) => {
    //         return <Credits obj={data} key={i} />
    //     })
    // }

    render() { 
        return (  
            <div>
                <p>This is sample data</p>
                <p># of credits remaining: <Credits credits={this.state.credits}/></p>
            </div>
        );
    }
}
 
export default CarData;