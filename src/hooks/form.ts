import React, { useState, ChangeEvent } from 'react'

interface IFormData {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  onChange(event: ChangeEvent<HTMLInputElement>): void
  validate(): boolean
  onBlur(): boolean
  error: string
}

interface ITypesValidate {
  [key: string]: {
    regex: RegExp
    message: string
  }
}

const types: ITypesValidate = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email valido'
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message:
      'Senha necessita ter 1 carácter maiúsculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres'
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize números apenas'
  }
}

const useForm = (type?: string | false): IFormData => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function validate(value: string): boolean {
    if (type === false) return true

    if (type === undefined) {
      if (value.length === 0) {
        setError('Preencha um valor')
        return false
      } else {
        setError('')
        return true
      }
    }

    if (value.length === 0) {
      setError('Preencha um valor')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError('')
      return true
    }
  }

  function onChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm
