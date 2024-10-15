/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Image from 'next/image'
import { BiLibrary } from 'react-icons/bi'

export default function CardFriends() {
  return (
    <div className="flex items-center my-2 px-4 py-3 bg-black bg-opacity-80 rounded-xl">
      <Image src="perfil.svg" alt="perfil" width={50} height={50}/>
      <div className="mx-4 w-60">
      <h1 className='font-bold text-xl mb-2  text-zinc-50'>Matheus Paiva</h1>
      <p className='text-xs  text-zinc-500'>@m4thwuz77</p>
      <div className="flex items-center justify-end gap-4">
        <button>
          <p className="text-green-400 hover:text-green-300 text-xs">Seguir</p>
        </button>
        <button>
          <p className="text-red-500 hover:text-red-400 text-xs">Ignorar</p>
        </button>
      </div>
    </div>
  </div>
  )
}
