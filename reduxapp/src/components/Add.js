 import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {useDispatch} from 'react-redux'
import { saveTodo }   from '../slices/movieSlice';
const Add = () => {
    
  const [movieInput ,setMovieInput]= useState (" ");
  
  const dispatch = useDispatch()

 
const addTodo = (e) =>{
  e.preventDefault()
 console.log ('Adding ${Add}')
 dispatch(saveTodo({
  item :movieInput ,
  done : false ,
  id :Date.now()
 }
 ))
}
  return (
    <div>
        
        <input type ="text" value ={movieInput} onChange={e=>setMovieInput(e.target.value)}/>
        <Button variant="outline-secondary" id="button-addon2" onClick={addTodo}>
          Add
        </Button>
      
    
       
       
    </div>
  )
}

export default Add
