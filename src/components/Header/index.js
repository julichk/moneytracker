import {Link} from "react-router-dom";
import { ThemeSwitch } from "../ThemeSwitch";
import {Nav, Menu, List} from './styles';
import { FormattedMessage } from "react-intl";
const Header = () => {
  return(
    <Menu>
      <Nav>
          <List>
            <li>
              <Link to ='/'>
              <FormattedMessage id='menu.home'/>
              </Link>
            </li>
            <li>
              <Link to ='/about'>
            <FormattedMessage id='menu.about'/></Link>
            </li>
            <li>
            <Link to ='/statistics'>
            <FormattedMessage id='menu.statistics'/></Link>
            </li> 
            <li>
            <Link to ='/settings'>
            <FormattedMessage id='menu.settings'/></Link>
            </li>
          </List>
        </Nav>
        <ThemeSwitch/>
    </Menu>
  )
};

export default Header;