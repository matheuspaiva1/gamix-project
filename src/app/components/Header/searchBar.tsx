import React from 'react'
import { IoIosSearch } from "react-icons/io";


export default function SearchBar() {
  return (
    <div className="relative w-full max-w-80">
      <IoIosSearch className="text-zinc-50 absolute left-2 top-2"/>
      <input type="text" className='bg-zinc-800 rounded-sm h-8 w-full px-2 pr-10 pl-2 text-zinc-50' />
    </div>
  )
}
