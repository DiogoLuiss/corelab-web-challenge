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
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  min-width: 248px;
  border-radius: 10px;
  padding-bottom: 10px;
`

export const DivTop = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Divsearch = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 30px;
  button {
    background: none;
    color: black;
    border: none;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }

  input {
    width: 70%;
    height: 40px;
    margin-right: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding-left: 10px;
  }
`
