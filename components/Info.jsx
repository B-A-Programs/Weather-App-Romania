import React from 'react'
import InfoCard from './InfoCard'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Info = ({ info, forecast, city }) => {
  let data = [];
  if(forecast != "loading") {
    forecast.map((d) => {
      data.push({date: d.dt_txt, Temperature: d.main.temp})
    })
  }

  return (
    <>
        {(info == 'loading' || forecast == 'loading') ?
            <div className="text-center mt-7 text-2xl font-extrabold">Loading...</div>
        :
        <>
          <div className='flex gap-10 mx-8 mt-6'>
              <InfoCard svg="/images/temp.png" title="Current temperature" text={`${parseFloat(info.main.temp).toFixed(2)}°C`} future={`${parseFloat(forecast[1].main.temp - info.main.temp).toFixed(2)}°C`} />
              <InfoCard svg="/images/wind.png" title="Wind speed" text={`${parseFloat(info.wind.speed).toFixed(2)} km/h`} future={`${parseFloat(forecast[1].wind.speed - info.wind.speed).toFixed(2)} km/h`} />
              <InfoCard svg="/images/humidity.png" title="Humidity" text={`${parseInt(info.main.humidity)}%`} future={`${parseInt(forecast[1].main.humidity - info.main.humidity)}%`} />
              <InfoCard svg="/images/pressure.png" title="Pressure" text={`${parseInt(info.main.pressure)}mm`} future={`${parseInt(forecast[1].main.pressure - info.main.pressure)}mm`} />
          </div>

          <div className='flex justify-center items-center gap-8 lg:justify-between flex-wrap mt-6 mx-8'>
            <div className='flex flex-col justify-center content-center bg-stone-50 rounded-2xl pr-12 py-3'>
              <h2 className='font-bold text-xl text-center mb-4'>{`Forecast for the next five days in ${city}`}</h2>
              <LineChart
                width={800}
                height={253}
                data={data}
                className='ml-0'
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" label="Date and time" tick={false} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </div>

            <div className='flex flex-col justify-around content-around bg-stone-50 rounded-2xl w-5/6 lg:w-1/3 px-12 py-8 lg:h-80'>
              <div>
                <h1 className='flex justify-between'><span className='text-lg font-semibold'>Visibility: </span> <span className='font-bold text-lg'>{ info.visibility / 1000 }km</span></h1>
                <hr className='border-stone-300 mt-3' />
              </div>
              <div>
                <h1 className='flex justify-between'><span className='text-lg font-semibold'>Description: </span> <span className='font-bold text-lg capitalize'>{ info.weather[0].description }</span></h1>
                <hr className='border-stone-300 mt-3' />
              </div>
            </div>
          </div>
        </>
        }
    </>
  )
}

export default Info