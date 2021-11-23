import React from "react";
import { buyIcecream } from "../redux/iceCream/iceCreamAction";
import { connect } from "react-redux";

function IcecreamContainer(props) {
  return (
    <div>
      <h2 className="ui violet header">
        Number of IceCream = {props.numOfIceCream}{" "}
      </h2>
      <button className="ui green button" onClick={props.buyIcecream}>
        Buy IceCream
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
