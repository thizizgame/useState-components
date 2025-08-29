"use client"
import { Task } from "@/components";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
   const [todos, setTodos] = useState([]);
   const [inputValue, setinputValue] = useState("");
   const [filteredStatus,setFilteredStatus] = useState('all')
   const addTodo = (event) => {
        setinputValue(event.target.value);  
   }
   const addClicked = () =>{
        setTodos([...todos, {title:inputValue, isCompleted:false , id: uuidv4()}]); 
        setinputValue("");    
   }
   const clickedEnter = (event) => {
        if(event.key === "Enter"){
            return addClicked();
        }
   }
   const handleCheck = (event, id)=>{
    setTodos(todos.map((el) => {
        if(el.id === id) {
            el.isCompleted = event.target.checked
        }
        return el
     } ))
   }
     const handleDeleteTodo = (id) => {
        alert("Deleting Task");
        const newTodos = todos.filter((el) => el.id !== id)
        setTodos(newTodos);

    }
    const allTodo = () => {
        setFilteredStatus('all')
    }
    const activeTodo = () => {
        setFilteredStatus('active') 
    }
    const completedTodo = () => {
        setFilteredStatus('completed')

    }

    const filteredData = todos.filter((el) => {
        if(filteredStatus === 'all') return el
        if(filteredStatus === 'active') return !el.isCompleted
        return el.isCompleted
    })
    const completedData = todos.filter((el) => {
        
        if(el.isCompleted === true){
            return el
        }
        
    })
     const clearCompletedData = () => {
        const newTodos = todos.filter((el) => {
            if(el.isCompleted === true){
                return el;
            }
        })
        setTodos(newTodos);
    }
    

return <div className="bg-amber-50 p-0 m-0 h-screen pt-20">
    <div className="text-black w-[377px] p-4 pt-6 pb-6 border-gray-100 shadow-lg m-auto bg-white">
        <p className="text-center font-semibold">To-Do List</p>
        <div className="flex mt-5">
            <input  className="w-full mr-[6px] border-1" onChange={addTodo} value={inputValue} onKeyDown={clickedEnter}></input>
            <button className="bg-black rounded-2xl text-white p-4 pt-1 pb-1" onClick={addClicked}>Add</button>
        </div>
        <div className="pt-5">
            <button onClick={allTodo} className="bg-black rounded-xl text-white p-4 pt-1 pb-1 mr-[6px]">All</button>
            <button onClick={activeTodo} className="bg-black rounded-xl text-white p-4 pt-1 pb-1 mr-[6px]">Active</button>
            <button onClick={completedTodo} className="bg-black rounded-xl text-white p-4 pt-1 pb-1">Completed</button>
        </div>
        <div>
             {filteredData.map((el, index) => {
                      return  <Task key={el.id} index={el.id} title={el.title} isChecked={el.isCompleted} handleCheck={handleCheck} handleDeleteTodo={handleDeleteTodo}></Task>
            })}
            <div className="flex justify-between items-center pt-4">
                <p>{completedData.length} of {filteredData.length}</p>
                <button onClick={clearCompletedData}>Clear Completed</button>
            </div>
            
        </div>
        <div className="mt-6 text-center">
            <p>Powered By <a href="www.pinecone.mn">Pinecone academy</a></p>
        </div>
</div>
</div>

}
export default Todo;