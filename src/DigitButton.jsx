/* eslint-disable react/prop-types */
import { ACTIONS } from "./App";
function DigitButton({ dispatch, digit }) {
  return (
    <button
      className="btn btn-primary"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default DigitButton;
