import Image from 'next/image'
import React from 'react'
import TitleCard from '../Cards/titleCard'
import TrendCards from '../Cards/trendCards'


export default function BgMain() {
  return (
    <div className='mt-10 mx-8'>
      <TitleCard/>
      <TrendCards/>
      
    </div>
  )
}
