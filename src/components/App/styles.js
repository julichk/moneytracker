import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const Wrapper = styled.div `
padding: 5px;
`



export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
  }
`;