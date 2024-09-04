import Image from 'next/image'
import React from 'react'

export default function TrendCards() {
  return (
    <div>
      <h1 className="">Em Alta</h1>
      <div className="">
        <div className="">
          <Image src="" alt="assasin" width={300} height={300} className=''/>      
          <h1 className="">League of Legends</h1>
          <p>867.433 jogadores</p>
          <p>Gratuito</p>
        </div>

        <div className="">
          <Image src="" alt="assasin" width={300} height={300} className=''/>      
          <h1 className="">Dota</h1>
          <p>777.488 jogadores</p>
          <p>Gratuito</p>
        </div>

        <div className="">
          <Image src="" alt="assasin" width={300} height={300} className=''/>      
          <h1 className="">Resident Evil 0</h1>
          <p>999.125 jogadores</p>
          <p>R$ 129,90</p>
        </div>

      </div>
    </div>
  )
}
