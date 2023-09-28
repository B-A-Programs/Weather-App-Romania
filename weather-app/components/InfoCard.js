import Image from 'next/image'
import React from 'react'

const InfoCard = (props) => {
  return (
    <div className='inline-block rounded-xl bg-stone-50 w-3/12 px-3 lg:px-6 py-3'>
        <h6 className='font-semibold inline-block'>{ props.title }</h6> <Image className='inline-block ml-2' src={props.svg} width={20} height={20} />
        <div className='text-2xl lg:text-4xl font-bold mt-3'>{ props.text }</div>
        <div className='mt-3 text-stone-500'><span className='text-amber-600'>{ props.future[0] != '-' && "+"}{ props.future }</span> next three hours</div>
    </div>
  )
}

export default InfoCard