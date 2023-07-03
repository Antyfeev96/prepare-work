import styled from 'styled-components'
import {Flex} from '../../styles';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border: 1px solid var(--colors-text);
  color: var(--colors-text);
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
  background-color: var(--colors-button-bg);
  color: var(--colors-text);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  
  &:hover {
    cursor: pointer;
  }
`
