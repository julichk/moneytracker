import { useCallback, useContext } from "react";
import { AppContext } from "../../providers/context";
import { PropTypes } from "prop-types"; 
import { Wrapper, TransactionDate, Value, Comment, Icon } from './styles';
import Star from '../assets/start.svg'
import StarYellow from '../assets/start_yellow.svg'

const Transaction = ({tran: {id, value, date, comment, isStarred}, onDelete, onStarClick }) => {

  const {state} = useContext(AppContext);
  const deleteItem = useCallback(() => onDelete(id), [id]);

  return (
    <Wrapper value={value}>
      <Icon onClick = {() => onStarClick(id)}>
      <img src = {isStarred ? StarYellow : Star}/>
      </Icon>
      <TransactionDate>{date}</TransactionDate>
      <Value>{value.toFixed(2)} {state.currency}</Value>
      <Comment>{comment}</Comment>
      <button onClick={deleteItem}>Delete</button>
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
  }),
  onStarClick: PropTypes.func,
  onDelete: PropTypes.func
}

export default Transaction;