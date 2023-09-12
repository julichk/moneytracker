import { FormattedMessage } from "react-intl";

 const Transale = (id, value) => {
  return (
    <FormattedMessage id ={id} value = {{...value}}/>
  )
 };
 export default Transale;