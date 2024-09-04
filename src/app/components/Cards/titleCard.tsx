import Image from 'next/image'
import React from 'react'

export default function TitleCard() {
  return (
    <div className="m-8">
        <Image src="/assassinCreed.png" alt="assasin" width={300} height={300} className=''/>      
        <div className="flex gap-4 items-center mx-[70px] ">
          <span className="text-2xl text-zinc-50">R$ 80 </span>
          <span className="text-xl text-zinc-500 line-through"> R$ 120</span>
        </div>
        <div className="flex items-center gap-4 mx-1 my-2">
          <button className="bg-fuchsia-950 hover:bg-fuchsia-900 p-2 text-zinc-50">Compre Agora</button>
          <button className="bg-stone-950 bg-opacity-65 hover:bg-opacity-80 text-zinc-50 py-2 px-5"> <a href="">Saiba Mais</a></button>
        </div>
      </div>
  )
}
