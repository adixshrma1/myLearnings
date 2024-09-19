import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    const {userId} = useParams();
  return (
    <div className='bg-gray-500 text-2xl p-4 text-white flex justify-center'>User: {userId}</div>
  )
}
