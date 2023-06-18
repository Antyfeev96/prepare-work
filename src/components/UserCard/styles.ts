import styled from 'styled-components';
import {Flex, Grid} from '../../styles';

export const Container = styled(Grid)`
  grid-template-columns: 1fr 3fr;
  padding: 20px;
  border: 1px solid grey;
  gap: 20px;
`

export const Avatar = styled.img`
  height: 100%;
  aspect-ratio: 1;
`

export const Data = styled(Flex)`
  flex-direction: column;
  justify-content: center;
`
