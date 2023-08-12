import { useState } from 'react'

type valueType = Record<string, any> | undefined

type Props<T> = {
  key: string
  initialValue?: T
}

export const useLocalStorage = <T extends valueType>({ key, initialValue }: Props<T>) => {
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.error('Error loading data from localStorage:', error)
      return initialValue
    }
  })

  const setLocalStorageValue = (value: T | undefined) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving data to localStorage:', error)
    }
  }

  return { storedValue, setLocalStorageValue }
}
