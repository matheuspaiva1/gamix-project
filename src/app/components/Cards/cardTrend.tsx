'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BiLibrary } from 'react-icons/bi'



const CardTrend = () => {
  const pathname = usePathname();

  
  
  const isPageMain = pathname === '/';

  return (
    <div className="flex items-center my-2 p-3 bg-black bg-opacity-80 rounded-xl">
    <Image src="/lol.jpg" alt="assasin" width={70} height={70} className='rounded-lg' />
    <div className="mx-4">
      <h1 className={`font-bold text-xl mb-4 ${isPageMain ? 'text-zinc-50' : 'text-zinc-50'}`}>League of Legends</h1>
      <p className={`text-xs mb-4 ${isPageMain ? 'text-zinc-50' : 'text-zinc-50'}`}>867.433 jogadores</p>
      <div className="flex items-center gap-48">
        <p className={`text-sm font-bold ${isPageMain ? 'text-zinc-50' : 'text-zinc-50'}`}>Gratuito</p>
        <button>
          <BiLibrary className={`border border-zinc-600 hover:border-none hover:bg-fuchsia-900 rounded-full text-2xl p-1 ${isPageMain ? 'text-zinc-50' : 'text-zinc-50'}`} />
        </button>
      </div>
    </div>
  </div>
  )
}

export default CardTrend;
