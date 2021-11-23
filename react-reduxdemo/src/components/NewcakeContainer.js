import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2 className="ui violet header">Number of cakes= {props.numOfCakes}</h2>
      <div className="ui action input">
        <input
          type="text"
          placeholder="No of Cakes To Buy"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          className="ui green button"
          onClick={() => props.buyCake(number)}
        >
          BUY {number} Cakes
        </button>
      </div>
    </div>
  );
}

// this function maps the state of object to props to display data to element
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

// this function helps us to pass this method as props to dispatch buyCake() action to prop "buyCake"
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
// connect function connect our react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
