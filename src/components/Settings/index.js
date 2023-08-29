import { useContext } from "react";
import { AppContext } from "../../providers/context";

const Test = ({onClick}) => {
  console.log('rendering');
  return <button onClick={onClick}>Click</button>
}

const Settings = () => {

  const {state, dispatch} = useContext(AppContext);
  const onChange = (e) => {
    const {value} = e.target;

    dispatch({
      type: 'changeCurrency',
      currency: value
    })
  }

  const onClick = () => {
    console.log('Parent click')
  }

  return (
    <>
      <h1>Settings</h1>
      <Test onClick ={onClick}/>
      <div>
        <form>
          <label>
            Currency: 
            <select name="currency" value={state.currency} onChange={onChange}>
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </label>
        </form>
      </div>
    </>
  )
};
export default Settings;