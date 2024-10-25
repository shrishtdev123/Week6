import { useEffect, useRef, useState } from "react"

export const UseRef=()=>{

    // if we want to access dom element in react than we should go  for useRef()
    // hooke
    // whatever we perform the elemet in js by using document.getElementById(),
    // document.getElementByClassname() in react we simply use useRef() hook to 
    // make our code more cleaner and also readabilty of code will improve  also
    // we get refrence of element by using useRef() and than manipulate the element according to need
    const divRef=useRef();
       const [data,setData]=useState(2000);
     useEffect(()=>{
         setTimeout(()=>{
              divRef.current.innerHTML=10;
         },5000)
     },[]);
     return <div>
          i am from use reft
          <div ref={divRef}>
              {data}
          </div>
     </div>
}