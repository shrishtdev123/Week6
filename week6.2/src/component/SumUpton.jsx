import { useState } from "react"

export const SumUpton=()=>{
      const [sum,setSum]=useState();

       return <div>
            <input type="number"
             placeholder="Enter a single digit number"
              style={{padding:10}}

               onChange={(e)=>{
                    const n=e.target.value;
                    let res=0;
                    for(let i=1;i<=n;i++)
                    {
                        res+=i;
                    }
                    setSum(res);
               }}
              />
              <h3>sum is:{sum}</h3>
       </div>
}