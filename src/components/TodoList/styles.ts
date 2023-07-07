import {Grid} from '../../styles.ts';
import styled from 'styled-components';


export const Container = styled.div``
export const TodoGrid = styled(Grid)`
  height: 400px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  overflow-y: auto;
  flex: 1 1 0;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`
