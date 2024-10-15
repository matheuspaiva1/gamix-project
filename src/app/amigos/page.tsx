import React from 'react'
import Header from '../components/Header/header'
import NavBar from '../components/navBar/navBar'
import SearchBar from '../components/Header/searchBar'
import CardFriends from './components/CardFriends'

export default function PageFriends() {
  return (
    <div className=" bg-zinc-900 w-screen h-screen">
      <div className="flex items-start">
        <NavBar/>
        <div className="m-8">
          <SearchBar/>
          <h1 className='my-8 font-bold text-2xl text-zinc-50'>Resultados encontrados:</h1>

          <div className="">
            <CardFriends/>
            <CardFriends/>
            <CardFriends/>
            <CardFriends/>
          </div>
        </div>
        <section className="ml-[35em]">
          <Header/>
        </section>
        
      </div>
    </div>
  )
}
