import React, { createContext } from 'react'


export const DataContext = createContext()
function Usercontex( {children}) {
  

    const userdata = {
        username: "abdul basit",
        age: 98,
        city: "faisalabd"
    }
    
  return (
    <div>
        <DataContext.Provider  value={userdata}>
        {children}
        </DataContext.Provider>
    </div>
  )
}

export default Usercontex