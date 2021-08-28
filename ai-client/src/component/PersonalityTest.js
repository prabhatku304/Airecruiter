import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

export default class PersonalityTest extends React.Component{
    state={
        persons: []
    };

    componentDidMount(){
        axios.get('personalitytest.herokuapp.com/api/v1/questions').then(res=>{
            console.log(res)
            this.setState({persons: res.data});
        });
    }

    render(){
        return(
            <ul>
                {this.state.persons.map(person=><li>{person.question}</li>)}
            </ul>
        )
    }
}