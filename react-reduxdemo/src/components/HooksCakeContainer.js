import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  // useSelector takes a function as parameter and similar to mapStateToProps method
  // useSelector returns whatever return by arrow/selector function
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes = {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;
