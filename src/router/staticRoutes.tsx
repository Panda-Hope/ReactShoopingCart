import { Outlet, RouteObject } from 'react-router-dom'
import { useLazyComponent } from '@/utils'

const StaticRoutes: RouteObject[] = [
  {
    path: '/404',
    element: useLazyComponent(() => import('@/pages/404/index'))
  },
  {
    path: '/401',
    element: useLazyComponent(() => import('@/pages/401/index'))
  }
]

export default StaticRoutes