import { useState, useEffect, useCallback } from "react";
import Balance from "../Balance";
import { Component } from "react";
import Transactions from "../Transactions";
import { Wrapper} from './styles'
import Form from "../Form";
import ErrorBoundary from '../ErrorBoundary'
import {getItems, addItem} from '../../utils/indexdb'
import { useData } from "../../hooks";
import { STATUSES } from "../../constants";



const Home = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  //const {transaction, status} = useData()

  useEffect(() => {
    getItems().then((item) => {
      setTransactions(item)
    }).catch((e) => {
      console.log('Error', e)
    })
  }, [setTransactions]);


  const onChange = ({value, date, comment}) => {
     const transac = {
      value: +value, 
      comment, 
      date, 
      id: Date.now()
     }

     setTransactions([
      ...transactions,
      transac
    ]);
    
    setBalance(balance + Number(value))

    addItem(transac);
  };

  const onDelete = useCallback((id) => {
    setTransactions((transactions) => transactions.filter((item) => item.id !=id))
  }, [setTransactions]);

  const onStarClick = useCallback((id) => {
    setTransactions((transactions) => transactions.map((item) => item.id !=id ? item : {
      ...item, 
      isStarred: !item.isStarred
    }))
  })

    return (
      <ErrorBoundary>
        <Wrapper>
        <Balance balance={balance}/>
        <Form onChange = {onChange}/>
        <hr/>
        

        <Transactions 
          transaction = {transactions} 
          onDelete ={onDelete}
          onStarClick = {onStarClick}/>
       
        
      </Wrapper>
      </ErrorBoundary>
    );
}

 

 export default Home;
