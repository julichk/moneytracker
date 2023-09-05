import { useState, useEffect, useRef } from "react";

const Counter = () => {
  const[clicks, setCliks] = useState(0);
  const [step, setStep] = useState(1);

  const currentValue = useRef(0);

  const showValue = () => {
    
    setTimeout(()=>{
      alert(currentValue.current)
    }, 3000)
  }

  useEffect(() => {
    console.log("render: ", clicks, step);
    document.title = `Componrnt is rendered. Cliked ${clicks} times`;

    currentValue.current = clicks;

    setStep ((prevValue) => prevValue + 1);
  }, [clicks,  setStep]);

  useEffect(() => {
    console.log("step: ", step);
  }, [step])

  return(
    <div>
      <div>Clicked: {clicks}</div>
      <button onClick={() => setCliks(clicks + step)}>Click</button>
      <br/>
      <button onClick = {showValue}>Show value</button>
      <br/>
      <input name="step" value = {step} onChange={(e)=>setStep(+e.target.value)}></input>
    </div>
  )
};
export default Counter;