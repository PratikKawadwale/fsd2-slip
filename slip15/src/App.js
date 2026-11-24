import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Simple Counter</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}

export default App;