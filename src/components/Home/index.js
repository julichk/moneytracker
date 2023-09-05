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

  const {transaction, status, pushTransaction, onDelete, onStarClick} = useData()

  const onChange = (data) => {

    pushTransaction(data)
    
    setBalance(balance + Number(data.value))

  };

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
