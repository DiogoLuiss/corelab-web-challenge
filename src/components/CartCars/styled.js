import styled from 'styled-components'

export const Container = styled.div`
  padding: 5px;
  margin-top: 50px;

  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const H = styled.h1`
  color: black;
`
export const ContainerItens = styled.div`
  max-height: 220px;
  height: 220px;
  background-color: white;
  border-radius: 20px;
  width: 85%;
  box-shadow: 5px 5px 15px 5px #000000;
  display: grid;
  overflow: hidden;
  min-width: 248px;
  @media (max-width: 370px) {
    width: 95%;
  }
  ${(props) =>
    props.CarColor === 'roxo'
      ? 'background-color: purple;'
      : '' || props.CarColor === 'azul'
      ? 'background-color: #3E87E6;'
      : '' || props.CarColor === 'amarelo'
      ? 'background-color: 	#FFD700;'
      : '' || props.CarColor === 'cinza'
      ? 'background-color: gray;'
      : ''}
`

export const DivContent = styled.div`
  display: flex;
  align-items: center;
`

export const ParagrafhPrice = styled.p`
  margin-top: 5px;
  font-size: 15px;
  font-weight: bold;
  color: green;

  @media (max-width: 290px) {
    font-size: 12px;
  }
`

export const DivInfoCar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  margin-bottom: 10px;
  width: 50%;
`
export const DivIcons = styled.div`
  display: flex;
  width: 100%;
  align-self: flex-end;
  justify-content: end;
  height: 40px;
  border-radius: 20px 20px 0px 0px;
  padding-bottom: 45px;

  button {
    margin-top: 10px;
    margin-right: 15px;
    color: black;
    background: none;
    border: none;
    &:hover {
      color: red;
      cursor: pointer;
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }
`

export const DivImgCar = styled.div`
  border-radius: 10px;
  width: 60%;
  height: 100%;
  border-radius: 20px;
`

export const Img = styled.img`
  border-radius: 0px 0px 0px 20px;
  height: 100%;
  width: 100%;
`

export const P = styled.p`
  margin-top: 5px;
  font-size: 15px;
  font-weight: 500;
  color: black;
  @media (max-width: 290px) {
    font-size: 13px;
  }
`
