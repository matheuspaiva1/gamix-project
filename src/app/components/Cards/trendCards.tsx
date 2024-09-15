import Image from 'next/image'
import React from 'react'
import { BiLibrary } from 'react-icons/bi';
import CardTrend from './cardTrend';

export default function TrendCards() {
  return (
    <div className="w-[25em] my-4  ">
      <h1 className="text-zinc-50 text-sm">Em Alta</h1>
      <div className="text-zinc-50 rounded-md">
        <CardTrend/>

        <CardTrend/>
      </div>
    </div>
  )
}
