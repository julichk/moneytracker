import { useState, useEffect, useCallback } from "react";
import Balance from "../Balance";
import { Component } from "react";
import Transactions from "../Transactions";
import { Wrapper} from './styles'
import Form from "../Form";
import ErrorBoundary from '../ErrorBoundary'
import { addItem} from '../../utils/indexdb'
import { useData } from "../../hooks";
import { STATUSES } from "../../constants";



const Home = () => {
  const [balance, setBalance] = useState(0);
  const [transactionsOld, setTransactions] = useState([]);

  const {transaction, status, pushTransaction} = useData()

  const onChange = (data) => {

    pushTransaction(data)

    //  const transac = {
    //   value: +value, 
    //   comment, 
    //   date, 
    //   id: Date.now()
    //  }

    //  setTransactions([
    //   transac,
    //   ...transaction
    // ]);
    
    setBalance(balance + Number(data.value))

    //addItem(transac);
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
        
        {status === STATUSES.PENDING ?(
          <div>Loading...</div>
        ) : null}

        {status === STATUSES.SUCCESS ?(
          <Transactions 
          transaction = {transaction} 
          onDelete ={onDelete}
          onStarClick = {onStarClick}/>
        ): null}
      </Wrapper>
      </ErrorBoundary>
    );
}

 

 export default Home;
