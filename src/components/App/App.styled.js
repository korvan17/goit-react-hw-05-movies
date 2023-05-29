import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const NavMenu = styled.nav`
    display: flex;
`

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;