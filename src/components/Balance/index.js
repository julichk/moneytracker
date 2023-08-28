import {Wrapper} from "./style"

const Balance = ({balance}) => {
  return(
    <Wrapper>
      <p>Current balance:</p>
      <p>{balance}</p>
    </Wrapper>
  )
};

export default Balance;