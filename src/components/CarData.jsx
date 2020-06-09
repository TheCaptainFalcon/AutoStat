import React, { Component } from 'react';
import axios from 'axios';
import Credits from './Credits';
import keys from '../config/keys';
import _ from 'lodash';

class CarData extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            credits1: [],
            credits2: []
        }

    }

    // Use similar logic for other endpoints when credit deductions occur
    // and if it makes sense to refactor this logic all into the Credits comp.

    // componentDidMount() {
    //     axios.get('http://api.carmd.com/v3.0/credits', {
    //         headers: {
    //             "content-type":"application/json",
    //             "authorization":keys.AUTH_KEY1,
    //             "partner-token":keys.PARTNER_TOKEN1
    //         }
    //     })
    //     .then(res => {
    //         this.setState({ credits1 : res.data.data })
    //         console.log(res.data)

    //         // if (Object.values(this.state.credits1) === 0) {
    //         //     axios.get('http://api.carmd.com/v3.0/credits', {
    //         //         headers: {
    //         //             "content-type":"application/json",
    //         //             "authorization":keys.AUTH_KEY2,
    //         //             "partner-token":keys.PARTNER_TOKEN2
    //         //         }
    //         //     })
    //         // }
    //         // this.setState({ credits2 : res.data.data })  
                  
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    componentDidMount() {
        const creditURL1 = axios.get('http://api.carmd.com/v3.0/credits', {
            headers: {
                "content-type":"application/json",
                "authorization":keys.AUTH_KEY1,
                "partner-token":keys.PARTNER_TOKEN1
            }
        })
        .then(res1 => {
            this.setState({ credits1 : res1.data.data })
            console.log(res1.data)
        })
        .catch(err1 => {
            console.log(err1)
        })
        
        const creditURL2 = axios.get('http://api.carmd.com/v3.0/credits', {
            headers: {
                "content-type":"application/json",
                "authorization":keys.AUTH_KEY2,
                "partner-token":keys.PARTNER_TOKEN2
            }
        })
        .then(res2 => {
            this.setState({ credits2: res2.data.data})
            console.log(res2.data)
        })
        .catch(err2 => {
            console.log(err2)
        })

        axios.all([ creditURL1, creditURL2 ])
    }

    getCredits() {
        return <Credits 
            credits1={Object.values(this.state.credits1)} 
            credits2={Object.values(this.state.credits2)}
        />
    }

    render() { 
        return (  
            <div>
                This is some sample data
                {this.getCredits()}
            </div>
        );
    }
}
 
export default CarData;