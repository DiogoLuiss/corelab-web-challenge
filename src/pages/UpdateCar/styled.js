import styled from 'styled-components'

export const DivMaster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 1px 20px 1px;
`

export const DivContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  box-shadow: 0px 0px 6px 7px white;
  background-color: black;
  border-radius: 10px;
  padding-bottom: 30px;
  padding: 10px 1px 20px 1px;
  min-width: 248px;
  @media (max-width: 370px) {
    width: 100%;
  }
`
export const H1 = styled.h1`
  color: white;
  font-size: 20px;
`
export const IconBackPage = styled.div`
  align-self: flex-start;
  margin-top: 20px;
  margin-left: 30px;
  color: white;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    width: 55%;
  }
  &:active {
    opacity: 0.6;
  }
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  width: 55%;
  max-width: 55%;
  @media (max-width: 370px) {
    width: 75%;
    max-width: 75%;
  }

  input {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    outline: none;
    border: none;
    margin-top: 5px;
    padding-left: 10px;
    font-size: 15px;
  }
  p {
    margin-top: 5px;
    margin-bottom: 5px;
    color: red;
    font-size: 12px;
    align-self: flex-start;
    margin-left: 20px;
  }
  button {
    width: 80%;
    height: 40px;

    background-color: purple;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 500;
    color: white;
    margin-bottom: 10px;
    transition: 1s;
    margin-top: 30px;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
      width: 55%;
    }
    &:active {
      opacity: 0.6;
    }
  }
`

export const Label = styled.label`
  font-size: 15px;
  align-self: flex-start;
  margin-left: 20px;
  font-weight: 500;
  color: white;
  margin-top: 5px;
`

export const LabelInput = styled.label`
  color: white;
  width: 100%;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;

  justify-content: center;
  border: 1px dashed white;
  padding: 5px;

  input {
    opacity: 0;
    width: 1px;
  }
`
