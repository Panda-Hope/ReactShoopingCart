import { Outlet, RouteObject } from 'react-router-dom'
import {
  useLazyComponent,
  useAuthLazyComponent as AuthLazyComponent
} from '@/utils'

const AsyncRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet/>,
    children: [
      {
        path: '',
        element: useLazyComponent(() => import('@/pages/Home/index'))
      },
      {
        path: 'xx',
        element: <AuthLazyComponent lazyComponent={() => import('@/pages/Home/index')} permission='*' />
      },
      {
        path: 'login',
        element: useLazyComponent(() => import('@/pages/Login/index'))
      }
    ]
  }
]

export default AsyncRoutes