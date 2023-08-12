import { useState, useEffect } from 'react'

type Data = Record<string, any>

type Props = {
  url: string
  skip?: boolean
}

export const useFetchData = <T extends Data>({ url, skip = false }: Props) => {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    if (!url || skip) {
      setLoading(false)
      return
    }

    const fetchData = async () => {
      setData(undefined)
      setLoading(true)
      setError(undefined)

      try {
        const response = await fetch(url)
        const jsonData: T = await response.json()
        console.log('run once')
        setData(jsonData)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, skip])

  return { data, loading, error }
}
