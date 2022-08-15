// import React, { useRef, useState } from 'react'
// import { services } from '../utils/dummy'
// import Service from './Cards/Service'
// import { useScroll } from "react-use-gesture";
// import { animated, useSpring } from "react-spring";
// import { AiOutlineArrowRight } from 'react-icons/ai'
// import { AiOutlineArrowLeft } from 'react-icons/ai'

// const Services = () => {


//   const listRef = useRef()

//   const [style, set] = useSpring(() => ({
//     transform: "perspective(500px) rotateY(0deg)"
//   }));



//   const handleScroll=(direction)=>{
//     const count =0

  
//   }


//   const bind = useScroll(event => {
//     set({
//       transform: `perspective(500px) rotateY(${
//         event.scrolling ? clamp(event.delta[0]) : 0
//       }deg)`
//     });
//   });

//   const clamp = (value, clampAt = 30) => {
//     if (value > 0) {
//       return value > clampAt ? clampAt : value;
//     } else {
//       return value < -clampAt ? -clampAt : value;
//     }
//   };

  

//   return (
//     <div className="w-full  bg-opacity-50  py-4  bg-[#646FD4] ">
//       <div className=' w-full'>

//       <div>
//         <h2 className="text-black heading ">Services</h2>
//         <div className="w-[80px]  h-[2px] bg-white" />
//       </div>

//       <div  className="flex py-4  w-full mt-4 scrollbar-hide flex-wrap overflow-x-scroll space-x-5" {...bind()} >
//         {services.map((item, i) => (
//           <>
//           <animated.div key={i}
//           ref={listRef}
//           style={{
//             ...style
//           }}
//           >
//             <Service {...item} />
//           </animated.div>
//           </>
//         ))}
//       </div>

//       <div
        
//         className="flex space-x-10 items-center justify-center mt-4"
//       >
//         <div
//           className="bg-white px-4 py-3 shadow-lg cursor-pointer"
//           onClick={()=>handleScroll('r')}
//         >
//           <AiOutlineArrowLeft />
//         </div>

//         <div
//           className="bg-white px-4 py-3 shadow-lg cursor-pointer"
//           onClick={()=>handleScroll('l')}
//         >
//           <AiOutlineArrowRight />
//         </div>
//       </div>
//       </div>

//     </div>
//   )
// }

// export default Services

import React, { useRef, useState } from 'react'
import { services } from '../utils/dummy'
import Service from './Cards/Service'
import { useScroll } from "react-use-gesture";
import { animated, useSpring } from "react-spring";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Services = () => {


  const listRef = useRef()

  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));



  const handleScroll=(direction)=>{
    const count =0

  
  }


  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`
    });
  });

  const clamp = (value, clampAt = 30) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  

  return (
    <div className="w-full  bg-opacity-50  py-4  bg-[#646FD4] ">
      <div className=' w-full'>

      <div>
        <h2 className="text-black heading ">Services</h2>
        <div className="w-[80px]  h-[2px] bg-white" />
      </div>

      <div  className="flex py-4  w-full mt-4 scrollbar-hide overflow-y-hidden overflow-x-scroll space-x-5" {...bind()} >
        {services.map((item, i) => (
          <>
          <animated.div key={i}
          ref={listRef}
          style={{
            ...style
          }}
          >
            <Service {...item} />
          </animated.div>
          </>
        ))}
      </div>

      <div
        
        className="flex space-x-10 items-center justify-center mt-4"
      >
        <div
          className="bg-white px-4 py-3 shadow-lg cursor-pointer"
          onClick={()=>handleScroll('r')}
        >
          <AiOutlineArrowLeft />
        </div>

        <div
          className="bg-white px-4 py-3 shadow-lg cursor-pointer"
          onClick={()=>handleScroll('l')}
        >
          <AiOutlineArrowRight />
        </div>
      </div>
      </div>

    </div>
  )
}

export default Services
