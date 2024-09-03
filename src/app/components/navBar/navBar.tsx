import React from 'react'
import { BiLibrary } from 'react-icons/bi'
import { FaUserFriends } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { IoIosHome } from 'react-icons/io'

export default function NavBar() {
  return (
    <nav className="bg-zinc-800 h-screen w-48">
      <h1 className='text-purple-800 font-bold text-2xl text-center m-4'>GamIX</h1>
      <p className='text-zinc-50'>  <a href="/" className='flex items-center py-4 px-10 hover:bg-purple-800 w-full  gap-2'> <GoHome/> Inicio</a> </p>
      <p className='text-zinc-50'>  <a href="" className='flex items-center py-4 px-10 hover:bg-purple-800 w-full  gap-2'> <BiLibrary/> Biblioteca</a></p>
      <p className='text-zinc-50'><a href="" className='flex items-center py-4 px-10 hover:bg-purple-800 w-full  gap-2'> <FaUserFriends/>
      Amigos</a></p>
    </nav>
  )
}
