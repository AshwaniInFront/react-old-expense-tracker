import React, { createContext, useReducer, useState } from "react";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };

    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    {
      id: 1,
      name: "Clothes",
      category: "Shopping",
      cost: 50,
      date: "10-20-22",
    },
    { id: 2, name: "Petrol", category: "Fuel", cost: 250, date: "10-20-22" },
    {
      id: 3,
      name: "Zombiehouse",
      category: "Fun",
      cost: 150,
      date: "10-20-22",
    },
    { id: 4, name: "Park", category: "Fun", cost: 100, date: "10-20-22" },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //remaining value calculated
  const totalExpenses = state.expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType =
    totalExpenses > state.budget ? "alert-danger" : "alert-success";
  	const remaining = state.budget - totalExpenses;

  // total expense calculated
  const total = state.expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        remaining,
        alertType,
        total,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
