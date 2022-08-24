import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import ChartBudget from "./components/ChartBudget";
import TableChart from "./components/TableChart";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm ">
            <Budget />
          </div>
          <div className="col-sm text-center">
            <AddExpenseForm />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <ChartBudget />
          </div>

          <div className="col-sm">
            <TableChart />
          </div>
        </div>

        <h3 className="mt-3">Expenses</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
