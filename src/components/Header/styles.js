import styled from 'styled-components'

export const Menu = styled.div `
width: 100%;
`;
Menu.displayNmae = 'Menu'


export const Nav = styled.nav `
width: 100%
`;

Nav.displayNmae = 'Nav';

export const List = styled.ul `
display: flex;
justify-content: space-around;
list-style-type: none;

li{
   a {
    text-decoration: none;
   }
}
`
List.displayNmae = 'Ul';