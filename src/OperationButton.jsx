/* eslint-disable react/prop-types */
import { ACTIONS } from "./App";
function OperationButton({ dispatch, operation }) {
  return (
    <button
      className="btn btn-primary"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}

export default OperationButton;
