import React, { useState } from 'react';
import Header from "./components/header"
import Input from './components/input';
import ToDoItem from './components/list';


function App() {
   const [ items , setItems] = useState([])

   const addItems = (input) =>{
      setItems(prevItems =>{
        return [...prevItems, input]
      });
   }

  return (
   <div className='flex flex-col items-center mt-8 mx-96 bg-teal-100 rounded-lg border border-solid border-cyan-300 w-96 h-96 '>

   <div className='py-8'>
   <Header/>
   </div>
    
    <div>
    <Input
      onAdd = {addItems}
    />
    </div>


    <div className='pt-4'>
    <ul>
    {
      items.map(item =>(
        <ToDoItem
         text = {item}
     />
     ))}
    
    </ul>
    
    </div>
    

   </div>
  );
}

export default App;
