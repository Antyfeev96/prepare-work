import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Flex} from '../../styles';

export const Container = styled(Flex)`
  width: 50%;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

export const NavItem = styled(NavLink)`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--colors-text);
  background-color: var(--colors-bg);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  
  &.active {
    background-color: #38aef8;
  }
`
