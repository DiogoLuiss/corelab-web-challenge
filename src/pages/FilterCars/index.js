import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaArrowLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { useCars } from '../../hooks/UserContext'
import {
  DivMaster,
  H1,
  DivContainer,
  IconBackPage,
  Form,
  DivInputsPrice,
  DivInputMin,
  DivInputMax,
  Inputs,
  InputsPrice
} from './styled'

const schema = yup.object({
  brand: yup.string(),

  year: yup.string('Apenas numeros'),
  priceMin: yup.number('Apenas numeros'),
  priceMax: yup.number('Apenas numeros')
})

function FilterCars() {
  const History = useHistory()

  const Nav = () => {
    History.push('/')
  }

  const { Filter, setFilter } = useCars([])

  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (clientData) => {
    setFilter(clientData)
    if (clientData === 'undefined' || clientData.bread === 'undefined') {
      toast.error('As Informações inseridas estão invalidas', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } else {
      toast.success('Filtro atualizado com sucesso', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      Nav()
    }
  }

  return (
    <DivMaster>
      <DivContainer>
        <IconBackPage onClick={() => Nav()}>
          <FaArrowLeft size={30}></FaArrowLeft>
        </IconBackPage>

        <H1>Filtro</H1>

        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label>Marca:</label>

          <Inputs
            maxLength={10}
            defaultValue={Filter.brand}
            {...register('brand', { required: true })}
            type="text"
            error={errors.brand?.message}
          />
          <p>{errors.brand?.message}</p>

          <label>Cor:</label>

          <Inputs
            maxLength={10}
            defaultValue={Filter.color}
            {...register('color', { required: true })}
            type="text"
            error={errors.color?.message}
          />
          <label>Ano:</label>

          <Inputs
            maxLength={4}
            defaultValue={Filter.year}
            {...register('year', { required: true })}
            type="text"
            error={errors.year?.message}
          />
          <p>{errors.year?.message}</p>

          <DivInputsPrice>
            <DivInputMin>
              <label>Preço Min:</label>
              <InputsPrice
                defaultValue={Filter.priceMin}
                {...register('priceMin')}
                type="number"
                error={errors.priceMin?.message}
              />
            </DivInputMin>
            <DivInputMax style={{ marginLeft: 10 }}>
              <label>Preço Max:</label>
              <InputsPrice
                defaultValue={Filter.priceMax}
                {...register('priceMax')}
                type="number"
                error={errors.priceMax?.message}
              />
            </DivInputMax>
          </DivInputsPrice>
          <button type="submit">Salvar</button>
        </Form>
      </DivContainer>
    </DivMaster>
  )
}

export default FilterCars
