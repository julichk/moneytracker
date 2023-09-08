import {
  BrowserRouter as Router,
  Route, Link, Routes
} from "react-router-dom";
import { Component } from "react";
import { Wrapper, GlobalStyle } from './styles'
import About from "../About";
import Statistics from "../Statistics";
import Home from "../Home"
import {open} from '../../utils/indexdb';
import Header from "../Header";
import Settings from "../Settings";

let id = 0;

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    open().then(() => {
      this.setState({
        loading: false
      })
    }).catch(() => {
      console.error('error')
    })
  }

  render() {
    if(this.state.loading){
      return(
        <div>Loading...</div>
      );
    }
    return (
      
        <Router>
        <Wrapper>
        <GlobalStyle/>
        <Header/>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/statistics" element={<Statistics/>} />
      <Route path="/settings" element={<Settings/>} />
    </Routes>
        
      </Wrapper>
      </Router>
    );
  }
}

export default App;
