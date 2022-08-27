import { useState, useEffect } from 'react'
import { getSessionLists, SessionData } from '@/api'

const useSessionData = () => {
  const [sessionData, setSessionData] = useState<SessionData | undefined>(undefined)
  const [loadingData, setLoadingData] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true)

      try {
        const res = await getSessionLists()
        setSessionData(res)
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