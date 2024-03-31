import React from 'react'
import { BackgroundBeams } from '../ui/background-beams'
import DownCursor from '../DownCursor'

const landing = () => {
  return (
    <div className="h-screen w-screen rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    <div className=" p-4 max-w-7xl   mx-auto relative z-10  w-full pt-20 md:pt-0">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        INFINODE
      </h1>
      <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
      Connecting Ideas. Building the Future.
      </p>
    </div>
    <BackgroundBeams />
    <DownCursor />
  </div>
  )
}

export default landing