import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "../css/ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount} INR</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
