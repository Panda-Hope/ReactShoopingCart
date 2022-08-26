import { Image } from 'antd-mobile'
import { ImageProps } from 'antd-mobile/es/components/image'

const ImageWrapper = (props: ImageProps) => {
  const {
    lazy = true,
    fit = 'contain',
    ...others
  } = props

  return (
    <Image fit={fit} lazy={lazy} {...others}></Image>
  )
}

export default ImageWrapper