'use client'

import Image from 'next/image'

export default function Map() {
  return (
    <Image
      src={'/img/map-1.jpg'}
      fill
      priority
      style={{ objectFit: 'cover' }}
      alt={'map'}
    />
  )
}
export { Map }
