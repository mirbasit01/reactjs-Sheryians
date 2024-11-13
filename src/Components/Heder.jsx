import React, { useContext } from 'react'
import { DataContext } from '../contex/Usercontex'

function Heder() {

    const username = useContext(DataContext)
  return (
    <div>Heder  {username.age}</div>
  )
}

export default Heder