import React from 'react'
import Usercontex, { DataContext } from '../contex/Usercontex'

function Footer() {
    const  data = Usercontex(DataContext)
  return (
    <div>Footer {data.city}</div>
  )
}

export default Footer