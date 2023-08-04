const Transaction = ({tran}) =>{
  return (
    <div>
    Label: {tran.label}
    <p>Value:{tran.value}</p>
  </div>
  )
}
export default Transaction;