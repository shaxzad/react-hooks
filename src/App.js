import React from "react";
import Header from "./components/header/header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/incomeExpense";
import TransactionList from "./components/TransactionList";
import AddTranaction from "./components/AddTranaction.js";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTranaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
