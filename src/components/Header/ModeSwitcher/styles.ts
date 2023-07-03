import styled from 'styled-components';
import {Flex} from '../../../styles.ts';

export const Container = styled(Flex)`
  align-items: center;
  gap: 10px;
  color: var(--colors-text);
  
  > span {
    text-transform: capitalize;
  }
  
  &:hover {
    cursor: pointer;
  }
`
