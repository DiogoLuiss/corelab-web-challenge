import React, { useEffect, useState } from 'react'
import { FaPenSquare, FaTrash, FaHeart } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useCars } from '../../hooks/UserContext'
import api from '../../services/api'
import ConvertValue from '../../utils/ConvertMoney'
import {
  ContainerItens,
  DivIcons,
  H1,
  ParagrafhPrice,
  DivContent,
  DivImgCar,
  Img,
  DivInfoCar,
  P
} from './styled'

function MyCars() {
  useEffect(() => {
    async function loadCars() {
      const { data } = await api.get('cars')

      setCars(data)
    }

    loadCars()
  }, [])

  const [cars, setCars] = useState([])

  const deleteCar = (carId) => {
    async function loadCars() {
      await toast.promise(api.delete(`/cars/${carId}`), {
        pending: 'excluindo carro..',
        success: 'Carro excluido com sucesso',
        error: 'Erro ao excluir carro, tente novamente'
      })
      const { data } = await api.get('cars')
      setCars(data)
    }

    loadCars()
  }

  const { push } = useHistory()

  const { putCars } = useCars()

  function editCar(cars) {
    push('editarCarros', { cars })
  }

  const Favorito = (Cart) => {
    putCars(Cart)
  }

  const Mycars = cars.filter((cars) => cars.author === true)

  return (
    <>
      <H1 isBack={Mycars.length === 0}>Meus Anúncios</H1>

      {Mycars &&
        Mycars.map((Mycars) => (
          <ContainerItens key={Mycars.id} CarColor={Mycars.color}>
            <DivContent>
              <DivImgCar>
                <Img src={Mycars.url} />
              </DivImgCar>
              <DivInfoCar>
                <DivIcons>
                  <button onClick={() => editCar(Mycars)}>
                    <FaPenSquare size={30}></FaPenSquare>
                  </button>
                  <button>
                    <FaTrash
                      onClick={() => deleteCar(Mycars.id)}
                      size={30}
                    ></FaTrash>
                  </button>
                  <button onClick={() => Favorito(Mycars)}>
                    <FaHeart size={30}></FaHeart>
                  </button>
                </DivIcons>
                <P>Nome: {Mycars.name}</P>
                <ParagrafhPrice>
                  Valor: {ConvertValue(Mycars.price)}
                </ParagrafhPrice>
                <P>Ano: {Mycars.year}</P>
                <P>Cor: {Mycars.color}</P>
                <P>Descrição : {Mycars.description}</P>
              </DivInfoCar>
            </DivContent>
          </ContainerItens>
        ))}
    </>
  )
}
export default MyCars
