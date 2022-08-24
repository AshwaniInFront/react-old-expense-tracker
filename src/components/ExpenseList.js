import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
import Table from "react-bootstrap/Table";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setfilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setfilteredExpenses(searchResults);
  };

  return (
    <>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
        onChange={handleChange}
      />
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>item No.</th>
            <th>item Name </th>
            <th>item Category </th>
            <th>Spent date </th>
            <th>Spent price </th>
          </tr>
          {filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.index}
              id={expense.id}
              name={expense.name}
              category={expense.category}
              cost={expense.cost}
              date={expense.date}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ExpenseList;
