import Image from 'next/image'
import React from 'react'
import TitleCard from '../Cards/titleCard'
import TrendCards from '../Cards/trendCards'
import ChatBar from '../chatBar.tsx/chatBar'


export default function BgMain() {
  return (
    <div className='mt-10 mx-8'>
      <TitleCard/>
      <div className="flex justify-center gap-[20em]">
        <TrendCards/>
        <ChatBar/>
      </div>
      
    </div>
  )
}
