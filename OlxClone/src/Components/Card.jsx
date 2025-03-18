import React from "react";
import { FaRupeeSign } from "react-icons/fa";
const Card = () => {
  return (
    <>
     <div className=" ">  
         <div className=" ">
            <img  className='h-40 w-40'  src="https://i.ytimg.com/vi/0kJHbvrTx64/sddefault.jpg" alt="" srcset="" />

           <h1 className=" flex"> <FaRupeeSign /><span> 20,000000</span></h1>

         </div>
     </div>
    </>
  );
};

export default Card;
