import React from 'react'
import  Card  from '../Components/Card'

export const Home = () => {
  return (
    <>
    <br></br>
       <p className=' font-bold mx-60'>Fresh recommendations</p><br></br>
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
