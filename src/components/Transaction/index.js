import { PropTypes } from "prop-types"; 
import { Wrapper, TransactionDate, Value, Comment } from './styles';

const Transaction = ({tran: {value, date, comment}}) =>{
  return (
    <Wrapper value={value}>
        <TransactionDate>{date}</TransactionDate>
        <Value>{value.toFixed(2)}</Value>
        <Comment>{comment}</Comment>
    </Wrapper>
  )
}

Transaction.defaultProps = {
  tran: {
    label: '',
    value: 0
  }
}

Transaction.propTypes = {
  tran: PropTypes.shape({
    label:  PropTypes.string,
    value:  PropTypes.number
  })
}

export default Transaction;