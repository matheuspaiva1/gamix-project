/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SearchBar from './searchBar'
import Image from 'next/image';
import { RiNotification2Line } from "react-icons/ri";



export default function Header() {
  return (
    <header>
      <SearchBar/>
      <RiNotification2Line className='text-zinc-50'/>

      

      <div className="">
        <Image src="perfil.svg" alt="perfil" width={100} height={100}/>
      </div>
    </header>
  )
}
