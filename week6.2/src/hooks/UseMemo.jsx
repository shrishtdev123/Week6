import { Counter } from "../component/Counter"
import { SumUpton } from "../component/SumUpton"

export const UseMemo=()=>{
      
       // useMemo hook it is used for optimization 
       // it just like memoization like in dp some where we learn it in Dsa 
       // which means remebering something which is already calculated 
       // so , we are not required to calculated that things if it come again
       // due this time comlexity will be less of number call or 
       // if we discuss in react number of re-rendering the element will be less
       // hence ,optimization will be improved 
       // syntax: useMemo(callbackfuntion,[]);
       //    useMemo(()=>{},[])
       // when value indside [] changes than only perform the logic inside the uesMemo otherwise there is no need of performing the logic 
       // it will save time ,hence, time complecity will be less

       // if any thing change in our state than app re-render 
       // and alongwith app componet its child also re-render even thought there is no change in the state of child component ,so if we not want to re-render component whoes state are not change than such type comoponent we have to wrap indside memeo() function 
       // the component which is inside memo() will be re-render only if 
       // state of that component will change ,hence memo() help
       // in optimiztion also reduce the time complexity 
        
     return <div>
          <SumUpton/>
            <br />
          <Counter/>
     </div>
}