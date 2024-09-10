import Image from 'next/image'
import React from 'react'

export default function TitleCard() {
  return (
    <div className="mx-8">
        <Image src="/assassinCreed.png" alt="assasin" width={250} height={250} className='ml-2'/>      
        <div className="flex gap-4 items-center mx-[60px] ">
          <span className="text-lg text-zinc-50">R$ 80 </span>
          <span className="text-xl text-zinc-500 line-through"> R$ 120</span>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <button className="bg-fuchsia-950 hover:bg-fuchsia-900 p-2 text-zinc-50 w-32 h-8 text-xs">Compre Agora</button>
          <button className="bg-stone-950 bg-opacity-65 hover:bg-opacity-80 text-zinc-50 py-2 px-5 w-28 h-8 text-xs"> <a href="">Saiba Mais</a></button>
        </div>
      </div>
  )
}
