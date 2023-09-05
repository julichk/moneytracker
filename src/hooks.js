import { useState, useEffect, useCallback } from "react";
import { STATUSES } from "./constants";
import {getItems, addItem} from './utils/indexdb'

export const useBooleanToogle = (itialStatus = false) => {
  const [status, setStatus] = useState(itialStatus);

  const handleStatusChange = () => {
    console.log('switch state')
    setStatus((currentStatus) => !currentStatus)
  };

  return {
    status,
    handleStatusChange
  }
};

export const useData = () => {
  const [state, setState] = useState({
    transactions: [],
    error: '',
    status: STATUSES.IDEL
  });

  useEffect(() => {
    setState({
      ...state,
      status: STATUSES.PENDING
    });
    getItems().then((transaction) => {
      setState({
        ...state,
        transaction,
        status: STATUSES.SUCCESS
      })
    }).catch((e) => {
      setState({
        ...state,
        transaction: [],
        status: STATUSES.ERROR,
        error: e
      })
    })
  }, []);

  const pushTransaction = useCallback((data) => {
    const transac = {
      ...data,
      value: +data.value,
      id: Date.now()
     }

     console.log(transac)

    setState((state) => ({
      ...state,
      transaction: [transac, ...state.transaction]
    }));

    addItem(transac);
  }, [setState]);

 
  const onDelete = useCallback((id) => {
    setState((state) => ({
      ...state,
      transaction: state.transaction.filter((item) => item.id !== id)
    }));
  }, [setState]);


  const onStarClick = useCallback((id) => {
    console.log('delete');
    setState((state) => ({
      ...state,
      transaction: state.transaction.map((item) => item.id !==id ? item : {
        ...item, 
        isStarred: !item.isStarred
      })
    }))
  }, [setState]);
  
  return {
    ...state,
     pushTransaction,
     onDelete,
     onStarClick
  }
}