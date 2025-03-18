import React from 'react'
import  Card  from '../Components/Card'

export const Home = () => {
  return (
    <>
       <p>Fresh recommendations</p>
      <div className=' flex  '>
      <Card/>
       <Card/>
       <Card/>
       <Card/>
      </div>


    </>
  )
}
