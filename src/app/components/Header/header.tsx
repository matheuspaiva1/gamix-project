/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SearchBar from './searchBar'
import Image from 'next/image';
import { RiNotification2Line } from "react-icons/ri";



export default function Header() {
  return (
    <header className="m-4 flex gap-96 items-center justify-center">
      <SearchBar />

      <div className="flex items-center justify-center gap-8 ml-96">
        <RiNotification2Line className='text-zinc-50'/>
        <Image src="perfil.svg" alt="perfil" width={50} height={50}/>
      </div>
    </header>
  )
}
