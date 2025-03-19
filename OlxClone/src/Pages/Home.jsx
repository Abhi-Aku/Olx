import React from 'react'
import  Card  from '../Components/Card'

export const Home = () => {
  return (
    <>
       <p>Fresh recommendations</p>
      <div className=' flex gap-10 justify-center items-center '>
      <Card/>
       <Card/>
       <Card/>
       <Card/>
      </div>
      <br></br>
      <br></br>
      <div className=' flex gap-10 justify-center items-center '>
      <Card/>
       <Card/>
       <Card/>
       <Card/>
      </div>
      <br></br>
      <br></br>
      <div className=' flex gap-10 justify-center items-center '>
      <Card/>
       <Card/>
       <Card/>
       <Card/>
      </div>


    </>
  )
}
