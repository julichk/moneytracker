import Transaction from "../Transaction";
import { PropTypes } from "prop-types"; 

const Transactions = ({transaction, onDelete, onStarClick}) => {
  
  return transaction.map((tran) => {
    return <Transaction key={tran.id} 
    tran={tran} 
    onDelete={onDelete} 
    onStarClick = {onStarClick}
    />})};

Transactions.propTypes = {
  transaction: PropTypes.array
}

Transactions.defaultProps = {
  transaction: []
}

export default Transactions;