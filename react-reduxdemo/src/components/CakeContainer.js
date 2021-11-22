import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes= {props.numOfCakes}</h2>
      <button onClick={props.buyCake}> Buy cake</button>
    </div>
  );
}

// this function maps the state of object to props to display data to element
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

// this function helps us to pass this method as props to dispatch buyCake() action to prop "buyCake"
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
// connect function connect our react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
