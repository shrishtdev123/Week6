import { useEffect, useState } from "react";

export const UseEffect1 = () => {
    // State to hold the todo data
    const [todoData, setTodoData] = useState([]);

    // Fetch todos when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/todos");
                const json = await response.json();
                console.log("Fetched data:", json.todoDetails); // Log the raw fetched data

                // Check if todoDetails is an array before using forEach
                if (Array.isArray(json.todoDetails)) 
                    {
                    setTodoData(json.todoDetails);
                } 
                else 
                {
                    console.error("Fetched data is not an array:", json.todoDetails);
                }
                
            } catch (error) {
                console.error('Error fetching data:', error);
                setTodoData([]); // Ensure todoData is always an array
            }
        };

        fetchData();
    }, []); // Empty array ensures this runs only once

    return (
        <div>
            {/* Optional: Render todo items */}
            {todoData.map(todo => (
                <div key={todo._id}>
                    <h2>{todo.title}</h2>
                    <p>{todo.description || "No description"}</p> {/* Handle empty description */}
                </div>
            ))}
        </div>
    );
};
