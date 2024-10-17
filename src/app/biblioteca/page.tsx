/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
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
          <h1 className='my-8 font-bold text-2xl text-zinc-50'>Todos os jogos encontrados:</h1>
          <CardTrend/>
        </div>
        <section className="ml-[35em]">
          <Header/>
        </section>
        
      </div>
    </div>
  )
}
