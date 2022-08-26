import { Outlet, RouteObject } from 'react-router-dom'
import { useLazyComponent } from '@/utils'

const AsyncRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet/>,
    children: [
      {
        path: '',
        element: useLazyComponent(() => import('@/pages/news/index'))
      }
    ]
  }
]

export default AsyncRoutes