import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { FaArrowLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { useCars } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  DivMaster,
  H1,
  DivContainer,
  IconBackPage,
  Form,
  Label,
  LabelInput
} from './styled'

const schema = yup
  .object({
    name: yup.string().required('Esse campo é obrigatório'),
    brand: yup.string().required('Esse campo é obrigatório'),
    year: yup.string('Apenas numeros').required('Esse campo é obrigatório'),
    price: yup.string('Apenas numeros').required('Esse campo é obrigatório'),
    file: yup.mixed().test('required', 'carregue a imagem', (value) => {
      return value && value.length > 0
    }),
    board: yup.string().required('Esse campo é obrigatório'),
    description: yup.string()
  })
  .required()

function RegisterCar() {
  const History = useHistory()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  function Nav() {
    History.push('/')
  }

  const onSubmit = async (clientData) => {
    const CarDataFormData = new FormData()

    CarDataFormData.append('file', clientData.file[0])
    CarDataFormData.append('name', clientData.name)
    CarDataFormData.append('color', clientData.color.Color)
    CarDataFormData.append('brand', clientData.brand)
    CarDataFormData.append('year', clientData.year)
    CarDataFormData.append('price', clientData.price)
    CarDataFormData.append('board', clientData.board)
    CarDataFormData.append('description', clientData.description)

    const { status } = await api.post('/cars', CarDataFormData)

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
    } else {
      toast.success('Carro cadastrado com sucesso', {
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

  const { cor } = useCars()

  const [fileName, setFileName] = useState(null)

  return (
    <DivMaster>
      <DivContainer>
        <IconBackPage onClick={() => Nav()}>
          <FaArrowLeft size={30}></FaArrowLeft>
        </IconBackPage>
        <H1>Registro</H1>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome:</Label>

          <input
            maxLength={10}
            {...register('name', { required: true })}
            type="text"
            error={errors.name?.message}
          />
          <p>{errors.name?.message}</p>

          <Label>Marca:</Label>

          <input
            maxLength={10}
            {...register('brand', { required: true })}
            type="text"
            error={errors.brand?.message}
          />
          <p>{errors.brand?.message}</p>

          <Label>Cor:</Label>

          <Controller
            name="color"
            control={control}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={cor}
                  getOptionValue={(Cor) => Cor.Color}
                  getOptionLabel={(Cor) => Cor.Color}
                  placeholder="Escolha a cor"
                ></ReactSelect>
              )
            }}
          />

          <Label style={{ marginTop: 15 }}>Ano:</Label>

          <input
            maxLength={4}
            {...register('year', { required: true })}
            type="text"
            error={errors.year?.message}
          />
          <p>{errors.year?.message}</p>

          <Label>Preço:</Label>

          <input
            maxLength={10}
            {...register('price', { required: true })}
            type="text"
            error={errors.price?.message}
          />
          <p>{errors.price?.message}</p>

          <LabelInput>
            {fileName || 'Adicione uma imagem'}
            <input
              {...register('file', { required: true })}
              type="file"
              accept="image/png, image/jpeg"
              onChange={(value) => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelInput>

          <p>
            {(fileName) => (fileName !== '' ? 'Esse campo é obrigatório' : '')}
          </p>

          <Label>Placa:</Label>

          <input
            maxLength={7}
            {...register('board', { required: true })}
            type="text"
            error={errors.board?.message}
          />
          <p>{errors.board?.message}</p>

          <Label>Descrição:</Label>

          <input
            maxLength={30}
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

export default RegisterCar
