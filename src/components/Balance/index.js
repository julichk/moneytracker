import {Wrapper} from "./style";
import { FormattedMessage } from "react-intl";

const Balance = ({balance}) => {
  return(
    <Wrapper>
      <FormattedMessage id='balance.currentBalance'/>
      <p>{balance}</p>
    </Wrapper>
  )
};

export default Balance;