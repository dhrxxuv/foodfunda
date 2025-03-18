import React from 'react'
import { Image, Breathing } from 'react-shimmer'

export function shimmer() {
  return (
    <div>
      <Image
        src='https://source.unsplash.com/random/800x600'
        fallback={<Breathing width={800} height={600} />}
      />
    </div>
  )
}