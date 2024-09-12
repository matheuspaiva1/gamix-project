import Image from 'next/image'
import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
export default function ChatBar() {
  return (
    <div className='bg-black bg-opacity-80 w-[26em] h-[23.2em] text-zinc-50 rounded-t-3xl'>
      <div className="flex items-center mt-2">
        <h1 className="text-xl font-semibold ml-40">Chat</h1>
        <div className="flex items-center justify-end gap-4 ml-28">
          <FiEdit className='w-6 h-12'/>
          <button><IoIosArrowDown className='w-6 h-12'/></button>
        </div>
      </div>

      <p className='text-zinc-500 ml-12 font-medium'>Online - 4</p>

      <div className="flex items-center pl-12 py-3 hover:bg-zinc-900">
        <Image src='/perfil.svg' alt='' width={40} height={40}/>
        <div className="ml-4">
          <h1 className="font-semibold">Amigo 1</h1>
          <p className="text-zinc-500 font-light">jogando Dota 2</p>
        </div>
      </div>

      <div className="flex items-center pl-12 py-3 hover:bg-zinc-900">
        <Image src='/perfil.svg' alt='' width={40} height={40}/>
        <div className="ml-4">
          <h1 className="font-semibold">Amigo 1</h1>
          <p className="text-zinc-500 font-light">jogando Dota 2</p>
        </div>
      </div>

      <div className="flex items-center pl-12 py-3 hover:bg-zinc-900">
        <Image src='/perfil.svg' alt='' width={40} height={40}/>
        <div className="ml-4">
          <h1 className="font-semibold">Amigo 1</h1>
          <p className="text-zinc-500 font-light">jogando Dota 2</p>
        </div>
      </div>

      <div className="flex items-center pl-12 py-3 hover:bg-zinc-900">
        <Image src='/perfil.svg' alt='' width={40} height={40}/>
        <div className="ml-4">
          <h1 className="font-semibold">Amigo 1</h1>
          <p className="text-zinc-500 font-light">jogando Dota 2</p>
        </div>
      </div>





    </div>
  )
}
