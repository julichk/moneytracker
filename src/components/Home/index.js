import Balance from "../Balance";
import { Component } from "react";
import Transactions from "../Transactions";
import { Wrapper} from './styles'
import Form from "../Form";
import ErrorBoundary from '../ErrorBoundary'
import {getItems, addItem} from '../../utils/indexdb'



class Home extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transaction: []
    };
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount(){
    getItems().then((transaction) => {
      this.setState({
        transaction,
        balance: transaction.reduce((acc, curr) => acc + curr.value, 0)
      })
    }).catch((e) => {
      debugger
    })
  }

  onChange = ({value, date, comment}) => {
     const transac = {
      value: +value, 
      comment, 
      date, 
      id: Date.now()
     }

    this.setState((state) => ({
      balance: state.balance + Number(value),
      transaction: [transac, ...state.transaction]
    }));

    addItem(transac);
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
