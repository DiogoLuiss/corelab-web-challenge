import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaArrowLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import api from '../../services/api'
import {
  DivMaster,
  DivContainer,
  H1,
  Form,
  Label,
  LabelInput,
  IconBackPage
} from './styled'

const schema = yup
  .object({
    name: yup.string(),
    brand: yup.string(),
    color: yup.string(),
    year: yup.string('Apenas numeros'),
    price: yup.string('Apenas numeros'),
    board: yup.string(),
    description: yup.string()
  })
  .required()

function UpdateCar() {
  const History = useHistory()

  function Nav() {
    History.push('/')
  }

  const {
    location: {
      state: { cars }
    }
  } = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (clientData) => {
    const CarDataFormData = new FormData()

    CarDataFormData.append('file', clientData.file[0])
    CarDataFormData.append('name', clientData.name)
    CarDataFormData.append('color', clientData.color)
    CarDataFormData.append('brand', clientData.brand)
    CarDataFormData.append('year', clientData.year)
    CarDataFormData.append('price', clientData.price)
    CarDataFormData.append('board', clientData.board)
    CarDataFormData.append('description', clientData.description)
    const { status } = await api.put(`/cars/${cars.id}`, CarDataFormData, {
      validateStatus: () => true
    })
    if (status === 400) {
      toast.error('As Informações inseridas estão invalidas', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } else if (status === 200) {
      toast.success('Carro atualizado com sucesso', {
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
        <H1>Atualizar Informações</H1>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome:</Label>

          <input
            defaultValue={cars.name}
            {...register('name', { required: true })}
            type="text"
            error={errors.name?.message}
          />
          <p>{errors.name?.message}</p>

          <Label>Marca:</Label>

          <input
            defaultValue={cars.brand}
            {...register('brand', { required: true })}
            type="text"
            error={errors.brand?.message}
          />
          <p>{errors.brand?.message}</p>

          <Label>Cor:</Label>

          <input
            defaultValue={cars.color}
            {...register('color', { required: true })}
            type="text"
            error={errors.color?.message}
          />
          <p>{errors.color?.message}</p>

          <Label>Ano:</Label>

          <input
            defaultValue={cars.year}
            {...register('year', { required: true })}
            type="text"
            error={errors.year?.message}
          />
          <p>{errors.year?.message}</p>

          <Label>Preço:</Label>

          <input
            defaultValue={cars.price}
            {...register('price', { required: true })}
            type="text"
            error={errors.price?.message}
          />
          <p>{errors.price?.message}</p>

          <LabelInput>
            {cars.file || 'Adicione outra imagem'}
            <input
              {...register('file', { required: true })}
              type="file"
              accept="image/png, image/jpeg"
            />
          </LabelInput>

          <Label>Placa:</Label>

          <input
            defaultValue={cars.board}
            {...register('board', { required: true })}
            type="text"
            error={errors.board?.message}
          />
          <p>{errors.board?.message}</p>

          <Label>Descrição:</Label>

          <input
            defaultValue={cars.description}
            {...register('description', { required: true })}
            type="text"
            error={errors.description?.message}
          />
          <p>{errors.description?.message}</p>

          <button type="submit">Salvar</button>
        </Form>
      </DivContainer>
    </DivMaster>
  )
}

export default UpdateCar
