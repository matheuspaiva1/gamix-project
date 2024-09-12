import Image from 'next/image'
import React from 'react'
import { BiLibrary } from 'react-icons/bi';
import { CiHeart } from "react-icons/ci";

export default function TrendCards() {
  return (
    <div className="w-[25em] my-4  ">
      <h1 className="text-zinc-50 text-sm">Em Alta</h1>
      <div className="text-zinc-50 rounded-md">
        <div className="flex items-center my-2 p-3 bg-black bg-opacity-80 rounded-xl">
          <Image src="/lol.jpg" alt="assasin" width={70} height={70} className=' rounded-lg'/>      
          <div className="mx-4">
            <h1 className="font-bold text-xl mb-4">League of Legends</h1>
            <p className="text-xs mb-4">867.433 jogadores</p>
            <div className="flex items-center gap-48">
              <p className="text-sm font-bold">Gratuito</p>
              <button>
                <BiLibrary className=" border border-zinc-600 hover:border-none hover:bg-fuchsia-900 rounded-full text-2xl p-1"/>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center my-2 p-3 bg-black bg-opacity-80 rounded-xl">
          <Image src="/dota.jpg" alt="assasin" width={70} height={70} className=' rounded-lg'/>      
          <div className="mx-4">
            <h1 className="font-bold text-xl mb-4">Dota 2</h1>
            <p className="text-xs mb-4">867.433 jogadores</p>
            <div className="flex items-center gap-48">
              <p className="text-sm font-bold">Gratuito</p>
              <button>
                <BiLibrary className=" border border-zinc-600 hover:border-none hover:bg-fuchsia-900 rounded-full text-2xl p-1"/>
              </button>

            </div>
            
          </div>
        </div>

        

        
      </div>
    </div>
  )
}
