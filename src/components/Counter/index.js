import { useState, useEffect } from "react";
const Counter = () => {
  const[clicks, setCliks] = useState(0);
  const [step, setStep] = useState(1);
  const showValue = () => {
    setTimeout(()=>{
      alert(clicks)
    }, 3000)
  }

  useEffect(() => {
    console.log("render: ", clicks);
    document.title = `Componrnt is rendered. Cliked ${clicks} times`;

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