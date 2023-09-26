'use client'

import React from 'react'
import { Map, Marker } from "pigeon-maps"
import { useRouter } from 'next/navigation';

const RomaniaMap = () => {
  const { push } = useRouter();

  return (
    <div className='mt-5'>
        <Map height={570} width={1000} boxClassname='center' defaultCenter={[45.9442858, 25.0094303]} defaultZoom={7}>
            <Marker width={50} anchor={[45.9442858, 25.0094303]} onClick={() => push("/")} />
        </Map>
    </div>
  )
}

export default RomaniaMap