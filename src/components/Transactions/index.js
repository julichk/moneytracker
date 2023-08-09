import Transaction from "../Transaction";
import { PropTypes } from "prop-types"; 

const Transactions = ({transaction}) => (transaction.map((tran) => <Transaction key={tran.id} tran={tran}/>));

Transactions.propTypes = {
  transaction: PropTypes.array
}

Transactions.defaultProps = {
  transaction: []
}

export default Transactions;