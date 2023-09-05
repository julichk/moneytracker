// import { useState, useEffect } from "react";
// import { STATUSES } from "./constants";
// import {getItems, addItem} from './utils/indexdb'

// export const useBooleanToogle = (itialStatus = false) => {
//   const [status, setStatus] = useState(itialStatus);

//   const handleStatusChange = () => {
//     console.log('switch state')
//     setStatus((currentStatus) => !currentStatus)
//   };

//   return {
//     status,
//     handleStatusChange
//   }
// };

// export const useData = () => {
//   const [state, setState] = useState({
//     transaction: [],
//     error: '',
//     status: STATUSES.IDEL
//   });

//   useEffect(() => {

//     setState({
//       ...state,
//       status: STATUSES.PENDING
//     });

//     getItems().then((transaction) => {
//       setState({
//         ...state,
//         transaction,
//         status: STATUSES.SUCCESS
//       })
//     }).catch((e) => {
//       setState({
//         ...state,
//         transaction: [],
//         status: STATUSES.ERROR,
//         error: e
//       })
//     })
//   }, []);

//   // const pushTransaction = (data) => {
//   //   const transac = {
//   //     ...data,
//   //     value: +data.value,
//   //     id: Date.now()
//   //    }

//   //    console.log(transac)

//   //   setState({
//   //     ...state,
//   //     transaction: [transac, ...state.transaction]
//   //   });

//   //   addItem(transac);
//   // }

//   return {
//     ...state,
//     // pushTransaction
//   }
// }