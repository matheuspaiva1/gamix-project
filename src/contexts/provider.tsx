import React from 'react'
import AppContext from './appContext'

export default function Provider(children:any) {

  const value = {

  }

  return(
    <div>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </div>
  )
}
