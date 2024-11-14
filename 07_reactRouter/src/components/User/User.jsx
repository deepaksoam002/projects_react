import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className="flex items-center justify-center  py-2 mt-8 text-white bg-orange-700 ">User:{userid}</div>
  )
}

export default User