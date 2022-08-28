import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Image,
  Container
} from '@chakra-ui/react'
import { useState } from 'react'
import { Trans } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Global from '@/assets/global.svg'
import { setUserInfo, UserInfoState } from '@/store/user'
import { loginUser } from '@/api'
import { unicode } from '@/utils'

import './index.scss'
import i18n from "@/i18n";

const LoginPage = () => {
  const [loading, setLoading] = useState(false)

  // i18n language
  const lang = i18n.language
  const switchLang = () => i18n.changeLanguage(lang === 'cn' ? 'en' : 'cn')

  // route navigate
  const [searchParams] = useSearchParams()
  const redirect = searchParams.get('redirect')

  // login check
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onLogin = () => {
    const userInfo: UserInfoState = {
      userId: unicode(),
      userName: 'Test',
      avatar: '',
      permissions: [
        'user:checkout'
      ]
    }
    dispatch(setUserInfo(userInfo))
    navigate(redirect || '/')
  }

  return (
    <Container className='login-page'>
      <div className='lang-box'>
        <Image width='20px' onClick={switchLang} src={Global} />
        <span className='ml-8' onClick={switchLang}>{lang}</span>
      </div>
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