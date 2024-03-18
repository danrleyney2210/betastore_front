'use client'

import Image from 'next/image'
import LoadIcon from '../../assets/svg/load.svg'


export const Load = () => {
  return (
    <Image src={LoadIcon} alt="Load" width={100} />
  )
}