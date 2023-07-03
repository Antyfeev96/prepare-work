import styled from 'styled-components';
import {Flex, Grid} from '../../styles';

export const Container = styled(Grid)`
  grid-template-columns: 1fr 3fr;
  padding: 20px;
  border: 2px solid var(--colors-text);
  gap: 20px;
  color: var(--colors-text);
`

export const Avatar = styled.img`
  height: 100%;
  aspect-ratio: 1;
`

export const Data = styled(Flex)`
  flex-direction: column;
  justify-content: center;
`
