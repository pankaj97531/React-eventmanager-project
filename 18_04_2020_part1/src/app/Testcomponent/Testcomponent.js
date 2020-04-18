import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { incrementCount,decrementCount } from './testAction';

class Testcomponent extends Component {

    render() {
        return (
            <div>
            <h1> Testcomponent </h1> 
            <p style={{fontSize:25}}> Data is : {this.props.data}</p>  
            <Button onClick={this.props.incrementCount} positive content="Increment" />             
            <Button onClick={this.props.decrementCount} negative content="Decrement" />             
            </div>
        )
    }
}
const mapStateToProp=(state)=>{
    return{
        data : state.test.data
    }
}
const action={
    incrementCount,
    decrementCount
};
export default connect(mapStateToProp,action)(Testcomponent) 