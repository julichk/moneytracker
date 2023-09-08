import { createContext, useReducer } from "react";
import defaultContext from "./defaultContext";
import App from "../../components/App/app";

const AppContext = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case "changeCurrency" : {
      return{
        ...state,
        currency: action.currency
      }
    };

    case 'setTheme' : {
      return {
        ...state,
        themeName: action.themeName
      }
    }


    case 'reset' : {
      return defaultContext;
    };
    default: {
      throw new Error('No action');
    };
  }
}

const AppContextProvider = (props) => {
  const[state, dispatch] = useReducer(reducer, defaultContext);
  const value = {state, dispatch};
  return(
    <AppContext.Provider value = {value}>
      {props.children}
    </AppContext.Provider>
  )
}

export {
  AppContext,
  AppContextProvider
};