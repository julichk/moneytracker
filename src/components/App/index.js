import {
  BrowserRouter as Router,
  Switch,
  Route, Link, Routes
} from "react-router-dom";
import { Component } from "react";
import { Wrapper, GlobalStyle } from './styles'
import About from "../About";
import Statistics from "../Statistics";
import Home from "../Home"

let id = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transaction: []
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange = (value) => {
    this.setState((state) => ({
      balance: state.balance + Number(value),
      transaction: [{value, label: 'Change', id: ++id}, ...state.transaction]
    }));
  };

  render() {
    return (
      <Router>
        <Wrapper>
        <GlobalStyle/>
        
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
          </ul>
        </nav>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/statistics" element={<Statistics/>} />
    </Routes>
        
      </Wrapper>
      </Router>
      
    );
  }
}

export default App;
