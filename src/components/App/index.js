import { useContext } from "react";
import App from "./app";
import { ThemeProvider } from "styled-components";
import { AppContext } from "../../providers/context";
import { getTheme } from "../../providers/themes/getTheme";


export default () => {
  const {state, dispatch} = useContext(AppContext);

  return (
    <ThemeProvider theme = {getTheme(state.themeName)}>
      <App/>
    </ThemeProvider>
  )
}