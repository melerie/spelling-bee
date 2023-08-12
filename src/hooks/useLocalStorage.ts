import { useState } from 'react'

type valueType = Record<string, any> | undefined

type Props<T> = {
  key: string
  initialValue?: T
}

export type StorageValue<T> = T | undefined
export type StorageValueFunction<T> = (value: StorageValue<T>) => StorageValue<T>

export const useLocalStorage = <T extends valueType>({ key, initialValue }: Props<T>) => {
  const [storedValue, setStoredValue] = useState<StorageValue<T>>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.error('Error loading data from localStorage:', error)
      return initialValue
    }
  })

  const setLocalStorageValue = (value: StorageValue<T> | StorageValueFunction<T>) => {
    try {
      const newValue = isStorageValueFunction(value) ? value(storedValue) : value
      setStoredValue(newValue)
      window.localStorage.setItem(key, JSON.stringify(newValue))
    } catch (error) {
      console.error('Error saving data to localStorage:', error)
    }
  }

  return { storedValue, setLocalStorageValue }
}

const isStorageValueFunction = <T>(
  value: StorageValue<T> | StorageValueFunction<T>
): value is StorageValueFunction<T> => typeof value === 'function'
