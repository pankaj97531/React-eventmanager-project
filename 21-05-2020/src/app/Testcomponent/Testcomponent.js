import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementCountAsync, decrementCountAsync } from "./testAction";
import { openModal } from "../modal/modalAction";
class Testcomponent extends Component {

  render() {

    return (
      <div>
          {this.props.loading.toString()}<br />
          {this.props.eventname ? this.props.eventname : "null" }
        <h1> Testcomponent </h1>
        <p style={{ fontSize: 25 }}> Data is : {this.props.data}</p>
        <Button
          name="increment"  
          loading={this.props.eventname==='increment' && this.props.loading}
          onClick={(e)=>this.props.incrementCountAsync(e.target.name)}
          positive
          content="Increment"
        />
        <Button
        name="decrement"
        loading={this.props.eventname==='decrement' && this.props.loading}
          onClick={(e)=>this.props.decrementCountAsync(e.target.name)}
          negative
          content="Decrement"
        />
        <Button
          onClick={() => this.props.openModal("TestModal", { data: 45 })}
          color="teal"
          content="Open Modal"
        />
      </div>
    );
  }
}
const mapStateToProp = (state) => {
    //console.log(state)
  return {
    data: state.test.data,
    loading: state.async.loading,
    eventname : state.async.eventname
  };
};
const action = {
  incrementCountAsync,
  decrementCountAsync,
  openModal,
};
export default connect(mapStateToProp, action)(Testcomponent);