import React from 'react'
import { FaHeart } from 'react-icons/fa'

import { useCars } from '../../hooks/UserContext'
import ConvertValue from '../../utils/ConvertMoney'
import {
  ContainerItens,
  DivIcons,
  H1,
  ButtonHeart,
  ParagrafhPrice,
  P,
  DivContent,
  DivImgCar,
  DivInfoCar,
  Img
} from './styled'

function FavoriteAds() {
  const { MyFavoriteCars, deleteCars } = useCars()

  const DeleteFavoriteCar = (car) => {
    deleteCars(car)
  }

  return (
    <>
      <H1 isBack={MyFavoriteCars.length === 0}>Favoritos</H1>

      {MyFavoriteCars &&
        MyFavoriteCars.map((MyFavoriteCars) => (
          <ContainerItens
            key={MyFavoriteCars.id}
            CarColor={MyFavoriteCars.color}
          >
            <DivContent>
              <DivImgCar>
                <Img src={MyFavoriteCars.url} />
              </DivImgCar>
              <DivInfoCar>
                <DivIcons>
                  <ButtonHeart
                    onClick={() => DeleteFavoriteCar(MyFavoriteCars)}
                  >
                    <FaHeart size={30}></FaHeart>
                  </ButtonHeart>
                </DivIcons>

                <P>Nome: {MyFavoriteCars.name}</P>
                <ParagrafhPrice>
                  Valor: {ConvertValue(MyFavoriteCars.price)}
                </ParagrafhPrice>
                <P>Ano: {MyFavoriteCars.year}</P>
                <P>Cor: {MyFavoriteCars.color}</P>
                <P>Descrição : {MyFavoriteCars.description}</P>
              </DivInfoCar>
            </DivContent>
          </ContainerItens>
        ))}
    </>
  )
}
export default FavoriteAds
// eu estou mandando uma função, e eu posso colocar funções dentro dela, em vez de colocar no index do home eu consigo colocar tudo aqui
