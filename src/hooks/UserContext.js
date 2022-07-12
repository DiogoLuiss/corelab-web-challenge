import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CarsContext = createContext()

export const CarsProvider = ({ children }) => {
  const [MyFavoriteCars, setMyFavoriteCars] = useState([])

  const updateLocalStorage = async (data) => {
    const clientCarsFavorites = await localStorage.setItem(
      'corelab:favoriteCars',
      JSON.stringify(data)
    )
    return clientCarsFavorites
  }

  const putCars = async (cars) => {
    const carsIndex = MyFavoriteCars.findIndex((car) => car.id === cars.id)

    let NewCartProduct = []

    if (carsIndex >= 0) {
      NewCartProduct = MyFavoriteCars

      setMyFavoriteCars(NewCartProduct)
    } else {
      NewCartProduct = [...MyFavoriteCars, cars]
      setMyFavoriteCars(NewCartProduct)
    }

    updateLocalStorage(NewCartProduct)
  }

  const deleteCars = async (cars) => {
    const newCart = MyFavoriteCars.filter((car) => car.id !== cars.id)
    setMyFavoriteCars(newCart)
    updateLocalStorage(newCart)
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartProducts = await localStorage.getItem(
        'corelab:favoriteCars'
      )

      if (clientCartProducts) {
        setMyFavoriteCars(JSON.parse(clientCartProducts))
      }
    }
    loadUserData()
  }, [])

  const [Filtercars, setFilterCars] = useState([])
  const [Filter, setFilter] = useState('true')

  const [cor] = useState([
    {
      Color: 'azul'
    },
    { Color: 'branco' },
    {
      Color: 'amarelo'
    },
    {
      Color: 'roxo'
    },
    {
      Color: 'cinza'
    }
  ])

  return (
    <CarsContext.Provider
      value={{
        MyFavoriteCars,
        putCars,
        deleteCars,
        Filtercars,
        setFilterCars,
        Filter,
        setFilter,
        cor
      }}
    >
      {children}
    </CarsContext.Provider>
  )
}

export const useCars = () => {
  const context = useContext(CarsContext)
  if (!context) {
    throw new Error('useCars must be used with useContext')
  }

  return context
}

CarsProvider.propTypes = {
  children: PropTypes.node
}
