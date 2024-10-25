import { useEffect, useState } from "react";
import axios from "axios";
import { Todoasperid } from "./component/Todoasrid";
import { UseMemo } from "./hooks/UseMemo";
import { UseCallback } from "./hooks/UseCallback";
import { Customehook } from "./hooks/Customehook";
import { Reconcilation } from "./week6.3/Reconcilation";
import { UseRef } from "./week6.3/UseRef";

function App() {
    const [todos, setTodos] = useState([]);
 // here we use useEffect bz we want to it excute automatically like constructor
 // it contain two parameter one is callback function and other is 
 //  dependacny array which function is when useEffect should called 
 // if not pass any things to the araay dendancy than it ussEffect will call only once 
 // if we want to call useEffect as per according to our need than 
 // at which conditon it should be run we have to pass that value inside the array 
 // dependancy,so whenever that value will be change our useEffect will call automatically and update the state  and now updated value will be render on the frontend
    useEffect(() => {
        axios.get("http://localhost:3000/todos")
            .then((res) => {
               
                setTodos(res.data.todoDetails);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

       console.log(todos);

    return (
        <div>
            
             {/* {
                 todos.map(todo=><Todoasperid key={todo.id} title={todo.title} description={todo.description} />)
             } */}
            {/* <UseMemo/>
            <UseCallback/> */}
            {/* <Customehook/> */}
            {/* <Reconcilation/> */}
            <UseRef/>

        </div>
    );
}


export default App;
