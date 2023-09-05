import { useContext, useMemo, useCallback, memo, useState  } from "react";
import { useBooleanToogle } from "../../hooks";
import { AppContext } from "../../providers/context";

const Test = memo(({data}) => {
  console.log('rendering');
  return <div>{JSON.stringify(data)}</div>
})

const Settings = () => {

  const {state, dispatch} = useContext(AppContext);
  const {status, handleStatusChange} = useBooleanToogle()
  //const [isAdvancedSettings, setIsAdvancedSettings] = useState(false)
  const onChange = (e) => {
    const {value} = e.target;

    dispatch({
      type: 'changeCurrency',
      currency: value
    })
  }

 const data = useMemo(()=>[2], []);

  return (
    <>
      <h1>Settings</h1>
      <Test data ={data}/>
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
      <div>
        <button onClick={handleStatusChange}>Advanced settings</button>

        {status ? (
          <div>
          <h2>Advanced settings</h2>
          <p>...</p>
        </div>
        ) : null}
      </div>
    </>
  )
};
export default Settings;