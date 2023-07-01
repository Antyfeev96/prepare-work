import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 25px;
  border: 3px solid grey;
  
  > label {
    display: flex;
    align-items: center;
    
    > input {
      margin: 0 0 0 10px;
    }
  }
`

export const Button = styled.button`
  padding: 10px;
  background-color: lightgreen;
  border: none;
  -webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;
  
  &:hover {
    cursor: pointer;
  }
`
