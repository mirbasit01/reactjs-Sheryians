import React, {useContext} from 'react'
import Usercontex, { DataContext } from '../contex/Usercontex'

function Section() {
    const   data = useContext(DataContext)
  return (
    <div>Section {data.city}</div>
  )
}

export default Section