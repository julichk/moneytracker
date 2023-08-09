import Balance from "../Balance";
import { Component } from "react";
import Transactions from "../Transactions";
import { Wrapper} from './styles'
import Form from "../Form";
import ErrorBoundary from '../ErrorBoundary'

let id = 0;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transaction: []
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange = ({value, date, comment}) => {
    this.setState((state) => ({
      balance: state.balance + Number(value),
      transaction: [{value: +value, comment, date, id: ++id}, ...state.transaction]
    }));
  };

  render() {
    return (
      <ErrorBoundary>
        <Wrapper>
        <Balance balance={this.state.balance}/>
        <Form onChange = {this.onChange}/>
        <hr/>
        <Transactions transaction = {this.state.transaction}/>
      </Wrapper>
      </ErrorBoundary>
    );
  }
}

 

 export default Home;
