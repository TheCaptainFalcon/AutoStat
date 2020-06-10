import React, { Component } from 'react';
import axios from 'axios';
import keys from '../config/keys';

class FutureRepairs extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            futureRepairs1 : [],
            futureRepairs2 : [],
            year : '',
            make : '',
            model : '',
            mileage: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.getFutureRepairs1 = this.getFutureRepairs1.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value })
    }

    getFutureRepairs1(e) {
        e.preventDefault();

        axios.get(`http://api.carmd.com/v3.0/upcoming?year=${this.state.year}&make=${this.state.make}&model=${this.state.model}&mileage=${this.state.mileage}`, {
            headers: {
                "content-type":"application/json",
                "authorization":keys.AUTH_KEY2,
                "partner-token":keys.PARTNER_TOKEN2
            }
        })

        // need to perform certain actions based on credit value of api key 1 and/or 2 (later)
        .then(res => {
            this.setState({ futureRepairs1 : res.data })
            console.log(res.data)
            console.log(this.state.futureRepairs1)
        })
        .catch(err => {
            console.log(err)
        })
    }

    

    render() { 
        return (  
            // refactor into option using api (get make/model/year)
            <form onSubmit={this.getFutureRepairs1}>

            <label/>Make
            <input
                name='make'
                type='text'
                placeholder='Make'
                onChange={this.handleChange}
                value={this.state.make}
            />

            <label/>Model
            <input 
                name='model'
                type='text'
                placeholder='Model'
                onChange={this.handleChange}
                value={this.state.model}
            />

            <label/>Year
            <input 
                name='year'
                type='number'
                placeholder='Year'
                onChange={this.handleChange}
                value={this.state.year}
            />

            <label/>Mileage
            <input 
                name='mileage'
                type='number'
                placeholder='Mileage'
                onChange={this.handleChange}
                value={this.state.mileage}
            />
            
            <input
                type='submit'
            />

            </form>

        );
    }
}
 
export default FutureRepairs;