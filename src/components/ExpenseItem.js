import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <>
      <tr key={props.index}>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.category}</td>
        <td>{props.date}</td>
        <td>
          £{props.cost}
          <span className="badge badge-primary badge-pill ml-3">
            <TiDelete size="1.5em" onClick={handleDeleteExpense} />
          </span>
        </td>
      </tr>
    </>
  );
};

export default ExpenseItem;
