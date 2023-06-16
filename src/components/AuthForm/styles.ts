import styled from 'styled-components'
import {Flex} from '../../styles';

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 35%;
  padding: 20px;
  border: 1px solid grey;
`

export const Title = styled.h1`
  margin: 0;
`

export const Inputs = styled(Flex)`
  flex-direction: column;
  gap: 10px;
`

export const Input = styled.input`
  padding: 10px;
`

export const SendFormButton = styled.button`
  width: 50%;
  display: flex;
  padding: 10px;
  border: none;
  background-color: #00bbff;
  color: white;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  
  &:hover {
    cursor: pointer;
  }
`
