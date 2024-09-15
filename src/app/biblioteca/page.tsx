import React from 'react'
import Header from '../components/Header/header'
import NavBar from '../components/navBar/navBar'
import SearchBar from '../components/Header/searchBar'
import CardTrend from '../components/Cards/cardTrend'

export default function PageLibrary() {
  return (
    <div className=" bg-zinc-900 w-screen h-screen">
      <div className="flex items-start">
        <NavBar/>
        <div className="m-8">
          <SearchBar/>
          <CardTrend/>
        </div>
        <section>
          <Header/>
        </section>
        
      </div>
    </div>
  )
}
