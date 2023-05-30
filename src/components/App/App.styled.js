import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const NavMenu = styled.nav`
    display: flex;
    background-color: #f0f0f0;
    padding: 10px;
    padding-left: 40px;
    gap: 20px;
    list-style: none;
    
`

export const StyledLink = styled(NavLink)`
  color: black;
  display: inline-block;
  margin-right: 10px;
  

  &.active {
    color: orange;
  }
`;