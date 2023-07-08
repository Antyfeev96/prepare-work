import styled from 'styled-components';
import {Pagination} from 'antd';
import {Grid} from '../../styles.ts';


export const Container = styled.div`
`
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

export const Pagi = styled(Pagination)`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`
