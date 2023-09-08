import {Link} from "react-router-dom";
import { ThemeSwitch } from "../ThemeSwitch";
import {Nav, Menu, List} from './styles'
const Header = () => {
  return(
    <Menu>
      <Nav>
          <List>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </List>
        </Nav>
        <ThemeSwitch/>
    </Menu>
  )
};

export default Header;