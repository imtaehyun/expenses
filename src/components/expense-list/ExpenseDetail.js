import React, { Component } from "react";
import ExpenseIcon from "./ExpenseIcon";

export default class ExpenseDetail extends Component {
  render() {
    return (
      <li
        className="mdc-list-item"
        onClick={() => this.props.onSelect(this.props.expense)}
      >
        <ExpenseIcon category={this.props.expense.category} />
        <span className="mdc-list-item__text">
          <span className="mdc-list-item__text__secondary">
            {this.props.expense.date}
            {this.props.expense.description
              ? ` ${this.props.expense.description}`
              : ""}
          </span>
        </span>
        <span className="mdc-list-item__end-detail">
          {this.props.expense.account === '지출' ? "-" : "+"} {this.props.expense.amount}원
        </span>
      </li>
    );
  }
}
