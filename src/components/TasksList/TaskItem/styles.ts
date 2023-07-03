import {Flex} from '../../../styles.ts';
import styled from 'styled-components';

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border: 3px solid var(--colors-button-bg);
  color: var(--colors-text);
  
  > div {
    > input {
      vertical-align: middle;
      margin-left: 10px;
    }
  }
`

export const Button = styled.button`
  background-color: var(--colors-button-bg);
  color: var(--colors-text);
  padding: 10px;
  border: none;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  
  &:hover {
    cursor: pointer;
  }
`
