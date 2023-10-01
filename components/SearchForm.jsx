'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const SearchForm = () => {
    const { push } = useRouter();

    const [lat, setLat] = React.useState('');
    const [lng, setLng] = React.useState('');

    return (
        <form className='mx-24 flex flex-col justify-center content-center gap-12' onSubmit={(e) => {e.preventDefault(); push(`/weather?lat=${lat}&lng=${lng}`)}}>
            <h1 className='text-center font-extrabold font-inter text-2xl'>Search by coordiantes: </h1>
            <div className='flex justify-center content-center flex-col gap-2'>
                <label htmlFor="query" className='font-extrabold font-inter text-stone-600 text-xl text-center'>Latitude: </label>
                <input id="query" className='search-cuisine__input' placeholder="Egs: 40.172" type="text" value={lat} onChange={(e) => setLat(e.target.value)} />
            </div>

            <div className='flex justify-center content-center flex-col gap-2'>
                <label htmlFor="query" className='font-extrabold font-inter text-stone-600 text-xl text-center'>Longitude: </label>
                <input id="query" className='search-cuisine__input' placeholder="Egs: 53.579" type="text" value={lng} onChange={(e) => setLng(e.target.value)} />
            </div>

            <button type="submit" className='mt-3 rounded-full bg-gradient-to-r flex content-center justify-center pl-5 from-orange-500 to-amber-500 text-white text-lg font-bold py-3 px-8 gap-2'><Image src="/assets/search.png" width={30} height={30} />Search</button>
        </form>
    )
}

export default SearchForm