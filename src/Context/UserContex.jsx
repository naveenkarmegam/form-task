import React, { createContext } from 'react'

let UserContex = createContext()

const UserProvider = () => {
  return (
    <UserContex.Provider value={{
        name:'naveen'
    }}>

    </UserContex.Provider>
    
  )
}

export default UserContex