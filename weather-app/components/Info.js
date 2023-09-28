import React from 'react'
import InfoCard from './InfoCard'

const Info = ({ info, forecast }) => {
    console.log(forecast)
  return (
    <>
        {(info == 'loading' || forecast == 'loading') ?
            <div className="text-center mt-7 text-2xl font-extrabold">Loading...</div>
        :
        <div className='flex gap-10 mx-8 mt-6'>
            <InfoCard svg="/images/temp.png" title="Current temperature" text={`${parseFloat(info.main.temp).toFixed(2)}°C`} future={`${parseFloat(forecast[1].main.temp - info.main.temp).toFixed(2)}°C`} />
            <InfoCard svg="/images/wind.png" title="Wind speed" text={`${parseFloat(info.wind.speed).toFixed(2)} km/h`} future={`${parseFloat(forecast[1].wind.speed - info.wind.speed).toFixed(2)} km/h`} />
            <InfoCard svg="/images/humidity.png" title="Humidity" text={`${parseInt(info.main.humidity)}%`} future={`${parseInt(forecast[1].main.humidity - info.main.humidity)}%`} />
            <InfoCard svg="/images/pressure.png" title="Pressure" text={`${parseInt(info.main.pressure)}mm`} future={`${parseInt(forecast[1].main.pressure - info.main.pressure)}mm`} />
        </div>
        }
    </>
  )
}

export default Info