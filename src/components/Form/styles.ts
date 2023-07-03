import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 25px;
  border: 3px solid var(--colors-text);
  color: var(--colors-text);
  
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
  background-color: var(--colors-button-bg);
  border: none;
  -webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;
  color: var(--colors-text);
  
  &:hover {
    cursor: pointer;
  }
`
