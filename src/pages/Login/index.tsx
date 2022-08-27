import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Container
} from '@chakra-ui/react'
import { useState } from 'react'
import { Trans } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '@/api'

import './index.scss'

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onLogin = () => {
    navigate('/')
  }

  return (
    <Container className='login-page'>
      <FormControl>
        <div className='login-title'><Trans>login</Trans></div>
        <div>
          <FormLabel><Trans>loginPage.username</Trans></FormLabel>
          <Input type='text' />
        </div>

        <div className='mt-12'>
          <FormLabel><Trans>loginPage.password</Trans></FormLabel>
          <Input type='password' />
        </div>

        <div className='mt-12'>
          <Button
            type='submit'
            onClick={onLogin}
            isLoading={loading}
            width='100%'
            colorScheme='twitter'>
            <Trans>signIn</Trans>
          </Button>
        </div>
      </FormControl>
    </Container>
  )
}

export default LoginPage