'use client'

import React from 'react'
import { Map, Marker } from "pigeon-maps"
import { useRouter } from 'next/navigation';
import cities from '@constants/cities';

const RomaniaMap = () => {
  const { push } = useRouter();

  return (
    <div className='mt-5'>
        <Map height={570} width={1000} boxClassname='center' defaultCenter={[45.9442858, 25.0094303]} defaultZoom={7}>
            {
              cities.map((city, index) => {
                return (
                  <Marker key={index} width={50} anchor={[city.lat, city.lng]} 
                  onClick={() => push(`/weather?city=${city.city}&lat=${city.lat}&lng=${city.lng}`)} />
                )
              })
            }
        </Map>
    </div>
  )
}

export default RomaniaMap