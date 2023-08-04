import Balance from "../Balance";
import { Component } from "react";
import Transactions from "../Transactions";
import Form from "../Form";

let id = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transaction: []
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange = (value) => {
    this.setState((state) => ({
      balance: state.balance + Number(value),
      transaction: [{value, label: 'Change'}, ...state.transaction]
    }));
  };

  render() {
    return (
      <div>
        <Balance balance={this.state.balance}/>
        <Form onChange = {this.onChange}/>
        <hr/>
        <Transactions transaction = {this.state.transaction}/>
      </div>
    );
  }
}

export default App;
