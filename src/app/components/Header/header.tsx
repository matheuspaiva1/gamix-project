/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SearchBar from './searchBar'
import Image from 'next/image';
import { RiNotification2Line } from "react-icons/ri";



export default function Header() {
  return (
    <header className="flex items-center justify-end gap-8 m-4 ">
        <RiNotification2Line className='text-zinc-50'/>
        <Image src="perfil.svg" alt="perfil" width={50} height={50}/>
    </header>
  )
}
