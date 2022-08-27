import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter
} from '@chakra-ui/react'
import { Trans } from 'react-i18next'
import { useState } from 'react'
import Close from '@/assets/close.svg'

import './index.scss'
import { useSelector } from 'react-redux'
import { CartInfo } from '@/store/cart'

const CartPage = (props) => {
  const { isOpen, onClose } = props

  // cart store
  const totalPrice = useSelector<{cartInfo: CartInfo}>(state => state.cartInfo.totalPrice) as number

  // on checkout click
  const onCheckoutClick = () => {

  }

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement='right' size='md'>
      <DrawerOverlay />
      <DrawerContent className='cart-page'>
        <DrawerHeader>
          <Trans>cartPage.summary</Trans>
          <img className='close-icon' src={Close} onClick={onClose} />
        </DrawerHeader>

        <DrawerBody>
          <div className='cart-item'></div>
        </DrawerBody>

        <DrawerFooter>
          <div className='content-box'>
            <span className='remark'><Trans>cartPage.tooltip</Trans></span>
            <div className='price-box mt-8'>
              <Trans>cartPage.total</Trans>
              <span>{totalPrice}</span>
            </div>
          </div>
          <Button onClick={onCheckoutClick} className='mt-12 mb-30' colorScheme='twitter' width='100%'>
            <Trans>cartPage.checkout</Trans>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default CartPage