import React from 'react'
import Image from 'next/image'

export default function BackgroundCycler() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Image
        src="/backgrounds/1.png" // 👈 replace with the image you like (vault + laser)
        alt="Harexis Background"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  )
}
