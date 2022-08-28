import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { setCurrency } from '@/store/cart'
import { getSessionLists, SessionData } from '@/api'

const useSessionData = () => {
  const dispatch = useDispatch()
  const [sessionData, setSessionData] = useState<SessionData | undefined>(undefined)
  const [loadingData, setLoadingData] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true)

      try {
        const res = await getSessionLists()
        setSessionData(res)
        dispatch(setCurrency(res))
      } finally {
        setLoadingData(false)
      }
    }

    if (!sessionData) fetchData()
  })

  return {
    sessionData,
    loadingData
  }
}

export default useSessionData