import React from 'react'
import { FaSlidersH } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

import { Button } from '../../components/Button'
import CartCars from '../../components/CartCars'
import { useCars } from '../../hooks/UserContext'
import { DivMaster, DivContainer, DivTop, Divsearch } from './styled'
function Home() {
  const History = useHistory()

  const { setFilterCars } = useCars()

  const Nav = () => {
    History.push('/cadastro')
  }
  const Nav2 = () => {
    History.push('/filtro')
  }

  return (
    <DivMaster>
      <DivContainer>
        <DivTop>
          <Divsearch>
            <input
              placeholder="Buscar"
              onChange={(ev) => setFilterCars(ev.target.value)}
            ></input>
            <button onClick={Nav2} to={'/filtro'}>
              <FaSlidersH size={30} />
            </button>
          </Divsearch>
          <Button onClick={Nav} to={'/cadastro'}>
            Adicionar
          </Button>
        </DivTop>
        <CartCars></CartCars>
      </DivContainer>
    </DivMaster>
  )
}

export default Home
