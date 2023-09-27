'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function City() {
  const searchParams = useSearchParams();

  const [date, setDate] = React.useState(new Date());
  const [city, setCity] = React.useState(searchParams.get("city") || 'loading')
  const [temp, setTemp] = React.useState('loading');
  const [status, setStatus] = React.useState('loading')

  const lat = searchParams.get("lat"); const lng = searchParams.get("lng");

  const fetchWeatherData = async () => {
    const response = await fetch('/api/weather', {
        method: 'POST',
        body: JSON.stringify({ lat: lat, lng: lng }),
    })

    const jsonResponse = await response.json();

    const result = jsonResponse.response;

    console.log(result);

    if(!city || city == "loading") {
        setCity(result.name);
    }
    setTemp(result.main.temp);
    setStatus(result.weather[0].main)
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

      <div>Temperature: { temp } °C</div>
      <div>Weather: { status }</div>

    </main>
  )
}
