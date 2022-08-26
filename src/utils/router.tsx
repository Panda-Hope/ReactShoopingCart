// lazy component hook
import { lazy, Suspense } from 'react'

export const useLazyComponent = (lazyComponent) => {
  const Component = lazy(lazyComponent)
  return <Suspense><Component /></Suspense>
}

export const useAsyncComponent = () => {

}