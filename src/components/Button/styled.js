import styled from 'styled-components'

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
`

export const ContainerButton = styled.button`
  width: 60%;
  height: 40px;
  background-color: purple;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-bottom: 10px;
  transition: 1s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    width: 55%;
  }
  &:active {
    opacity: 0.6;
  }
`
