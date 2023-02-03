import React from 'react'


interface ErrorMessageProps{
  error: string
}
export default function Errors({error}:ErrorMessageProps) {

 
  return (
    <div>
        <p className='text-center'>{error}</p>
    </div>
  )
}
