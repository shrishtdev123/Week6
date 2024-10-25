
// if we want to some properties to the 
// component than we should use props which stand for properties
// we hace to way to pass prop either pass props directly 
// than use . operstor to access data
// and other way by using decstructing of object
// decstructing of object way is cleaner and and improve the code readablity

import { useState } from "react"
import { UseEffect1 } from "./hooks/Useeffect1";

// we can achive same requirement from both
function App() {
 
  return (
    <div>
      {/* <Header title="shrisht dev"/>  */}
       {/* <CardWrapper>
       <TextComponent/>
       </CardWrapper> */}
      <UseEffect1/>
    </div>
  )
}

 // eslint-disable-next-line react/prop-types
 const Header=({title})=>{
     
        const [title1,setTile]=useState(title);
         
        const handletitlechange=()=>{
               setTile("dvdjdvjdvd");
        }
    
       return <div>
            <button onClick={handletitlechange}>click me to change title</button>
            <br />
            <p>my name is {title1}</p>
       </div>
 }

 // wrappercomponent
   
  const CardWrapper=({children})=>{
      return <div style={{border:"2px solid red",padding:20}}>
            {children}
      </div>
  }

  // make other component and render it between wrapper component

  const TextComponent=()=>{
       return <div>
           hi i am from TextComponent
       </div>
  }


export default App
