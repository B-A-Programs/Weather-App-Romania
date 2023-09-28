'use client'

import Info from '@components/Info';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import { Map, Marker } from 'pigeon-maps';
import React, { useEffect } from 'react'

export default function City() {
  const searchParams = useSearchParams();

  const [date, setDate] = React.useState(new Date());
  const [city, setCity] = React.useState(searchParams.get("city") || 'loading')
  const [currentInfo, setCurrentInfo] = React.useState('loading');
  const [forecast, setForecast] = React.useState('loading')

  const lat = parseFloat(searchParams.get("lat")); const lng = parseFloat(searchParams.get("lng"));

  const fetchWeatherData = async () => {
    const response = await fetch('/api/weather', {
        method: 'POST',
        body: JSON.stringify({ lat: lat, lng: lng }),
    })

    const jsonResponse = await response.json();

    const result = jsonResponse.response;

    if(!city || city == "loading") {
        setCity(result.city.name);
    }
    setCurrentInfo(result.list[0]);
    setForecast(result.list);
  }

  useEffect(() => {
    fetchWeatherData()
  }, []);

  return (
    <main className="p-2">
      <Link className='float-left inline absolute' href={"/"}><button className='bg-stone-400 hover:bg-stone-500 rounded-lg px-4 py-2 text-white font-bold'>Back to home</button></Link>
      <h1 className="secondary_text text-center mt-6">
        Weather in <div className="inline-block orange_gradient">{city}</div> on <div className="inline-block orange_gradient">{date.toDateString()}</div>
      </h1>

      <div className='text-center mt-5'>
        <Map height={170} width={1430} defaultCenter={[lat, lng]} defaultZoom={10}>
          <Marker width={50} anchor={[lat, lng]} />
        </Map>
      </div>

      <Info info={ currentInfo } forecast={ forecast } />

    </main>
  )
}
