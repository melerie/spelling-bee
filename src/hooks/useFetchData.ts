import { useState, useEffect, SetStateAction, Dispatch } from 'react'

type Data = Record<string, any>

type Props<T> = {
  url: string
  skip?: boolean
  onComplete?: (data: T) => void
}

export const useFetchData = <T extends Data>({ url, skip = false, onComplete }: Props<T>) => {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    if (!url || skip) {
      setLoading(false)
      return
    }

    fetchData<T>(url, onComplete, setData, setLoading, setError)
  }, [url, skip])

  return { data, loading, error, refetch: () => fetchData<T>(url, onComplete, setData, setLoading, setError) }
}

const fetchData = async <T extends Data>(
  url: string,
  onComplete: ((data: T) => void) | undefined,
  setData: Dispatch<SetStateAction<T | undefined>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<Error | undefined>>
) => {
  setData(undefined)
  setLoading(true)
  setError(undefined)

  try {
    const response = await fetch(url)
    const jsonData: T = await response.json()
    console.log('run once')
    setData(jsonData)
    onComplete?.(jsonData)
  } catch (err) {
    setError(err as Error)
  } finally {
    setLoading(false)
  }
}
