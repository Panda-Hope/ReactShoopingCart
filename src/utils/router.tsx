// lazy component hook
import {
  ComponentType,
  lazy,
  Suspense,
  useEffect
} from 'react'
import { useNavigate } from 'react-router-dom'

import { hasPermission } from '@/utils/permission'

export const useLazyComponent = (lazyComponent) => {
  const Component = lazy(lazyComponent)
  return <Suspense><Component /></Suspense>
}

export const lazyComponent = (props) => {
  const { lazyComponent } = props
  const Component = lazy(lazyComponent)
  return <Suspense><Component /></Suspense>
}

interface AuthLazyProps {
  lazyComponent: () => Promise<{default: ComponentType}>
  permission: string
}

// authorized lazy component
export const useAuthLazyComponent = (props: AuthLazyProps) => {
  const {
    lazyComponent,
    permission
  } = props
  const navigate = useNavigate()

  useEffect(() => {
    const check = async () => {
      const passed = await hasPermission(permission)
      if (passed) return

      navigate('/401')
    }
    check()
  })

  const Component = lazy(lazyComponent)
  return <Suspense><Component /></Suspense>
}