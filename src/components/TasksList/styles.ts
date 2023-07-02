import {Grid} from '../../styles.ts';
import styled from 'styled-components';

export const Container = styled(Grid)`
  overflow-y: auto;
  flex: 1 1 0;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  
  &::-webkit-scrollbar {
    opacity: 0;
  }
`
