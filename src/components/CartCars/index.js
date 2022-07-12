import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'

import FavoriteAds from '../../components/FavoriteAds'
import { useCars } from '../../hooks/UserContext'
import api from '../../services/api'
import ConvertValue from '../../utils/ConvertMoney'
import MyCars from '../MyCars'
import {
  Container,
  H,
  ContainerItens,
  DivIcons,
  ParagrafhPrice,
  DivContent,
  DivImgCar,
  Img,
  DivInfoCar,
  P
} from './styled'

function CartCars() {
  const [cars, setCars] = useState([])

  const { putCars, Filtercars, Filter } = useCars()

  useEffect(() => {
    async function loadCars() {
      const { data } = await api.get('cars')

      setCars(data)
    }

    loadCars()
  }, [])

  if (Filter.priceMax === '') {
    Filter.priceMax = 1000000
  }

  const carsOwner = cars.filter((cars) => cars.author === false)

  const Findcars = carsOwner.filter(
    (cars) =>
      cars.name.startsWith(Filtercars) ||
      cars.price.startsWith(Filtercars) ||
      cars.color.startsWith(Filtercars) ||
      cars.year.startsWith(Filtercars)
  )
  const filterCars = Findcars.filter(
    (cars) =>
      Filter === 'true' ||
      (cars.brand.startsWith(Filter.brand) &&
        cars.color.startsWith(Filter.color) &&
        cars.year.startsWith(Filter.year) &&
        cars.price > Filter.priceMin &&
        cars.price < Filter.priceMax)
  )

  const Favorito = (Cart) => {
    putCars(Cart)
  }

  return (
    <Container>
      <FavoriteAds></FavoriteAds>

      <MyCars></MyCars>
      <H>Anuncios</H>
      {filterCars.map((cars) => (
        <ContainerItens key={cars.id} CarColor={cars.color}>
          <DivContent>
            <DivImgCar>
              <Img src={cars.url} />
            </DivImgCar>
            <DivInfoCar>
              <DivIcons>
                <button onClick={() => Favorito(cars)}>
                  <FaHeart size={30}></FaHeart>
                </button>
              </DivIcons>
              <P>Nome: {cars.name}</P>
              <ParagrafhPrice>Valor: {ConvertValue(cars.price)}</ParagrafhPrice>
              <P>Ano: {cars.year}</P>
              <P>Cor: {cars.color}</P>
              <P>Descrição : {cars.description}</P>
            </DivInfoCar>
          </DivContent>
        </ContainerItens>
      ))}
    </Container>
  )
}
export default CartCars
// eu estou mandando uma função, e eu posso colocar funções dentro dela, em vez de colocar no index do home eu consigo colocar tudo aqui
