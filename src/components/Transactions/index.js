import Transaction from "../Transaction";

const Transactions = (props) => (
  <div>
    {
      props.transaction.map((tran) => <Transaction key={tran.id} tran={tran}/>)
    }
  </div>
);

export default Transactions;