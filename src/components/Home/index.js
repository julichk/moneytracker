import { useState, useEffect, useCallback } from "react";
import Balance from "../Balance";
import { Component } from "react";
import Transactions from "../Transactions";
import { Wrapper} from './styles';
import { ChangeBalance } from "../ChangeBalance";
import ErrorBoundary from '../ErrorBoundary'
import { addItem} from '../../utils/indexdb'
import { useData } from "../../hooks";
import { STATUSES } from "../../constants";

const Home = () => {
  const [balance, setBalance] = useState(0);

  const {transactions, status, pushTransaction, onDelete, onStarClick, hasNextPage, loadMoreRows} = useData()

  const onChange = (data) => {

    pushTransaction(data)
    
    setBalance(balance + Number(data.value))

  };

    return (
      <ErrorBoundary>
        <Wrapper>
        <Balance balance={balance}/>
        <ChangeBalance onChange={onChange}/>
        <hr/>
        
        
          <Transactions 
          data={transactions} 
          isNextPageLoading={status === STATUSES.PENDING}
          // transaction = {transaction}
          hasNextPage={hasNextPage}
          loadMoreRows={loadMoreRows} 
          onDelete ={onDelete}
          onStarClick = {onStarClick}/>
        
      </Wrapper>
      </ErrorBoundary>
    );
}

 export default Home;
