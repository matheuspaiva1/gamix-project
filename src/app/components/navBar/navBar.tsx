import React from 'react'
import { BiLibrary } from 'react-icons/bi'
import { FaUserFriends } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'

export default function NavBar() {
  return (
    <nav className="bg-zinc-800 h-screen w-48">
      <h1 className='text-fuchsia-700 font-bold text-2xl text-center m-4'>GamIX</h1>
      <p className='text-zinc-50'>  <a href="/" className='flex items-center py-4 px-8 hover:bg-fuchsia-800 w-full  gap-4'> <GoHome/> Início</a> </p>
      <p className='text-zinc-50'>  <a href="" className='flex items-center py-4 px-8 hover:bg-fuchsia-800 w-full  gap-4'> <BiLibrary/> Biblioteca</a></p>
      <p className='text-zinc-50'><a href="" className='flex items-center py-4 px-8 hover:bg-fuchsia-800 w-full  gap-4'> <FaUserFriends/>
      Amigos</a></p>
    </nav>
  )
}
