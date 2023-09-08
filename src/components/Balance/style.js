import styled from 'styled-components'

export const Wrapper = styled.div `
padding: 5px;
text-align: center;
color:${({theme}) => theme.colorBalance};
background:${({theme}) => theme.backgroundBalance};
`
Wrapper.displayName = 'Wrapper';