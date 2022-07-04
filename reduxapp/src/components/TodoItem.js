import React,{useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import '../App.css'
import {useDispatch} from 'react-redux'
import {setCheck ,deleteTodo,edit} from '../slices/movieSlice'

const TodoItem= ({name,done,id})=> {
  const dispatch = useDispatch();
  const [editt, setEditt] = useState(false)
  const [disc, setDisc] = useState("")
  const editDisc = () =>{
    dispatch(edit({id: id,name:disc}))
    setEditt(false)
  }

  const handleCheck=()=>{
         dispatch(setCheck(id))
};
const handleDeleteClick=() =>{
    dispatch(deleteTodo({id}))
};

  return (
    <div className='todoItem'>
      <Checkbox
       checked ={done} 
       color ="primary"
       onChange={handleCheck}
       inputProps={{ 'aria-label': 'secondary checkbox' }}
      
      />
      <p className={done && 'todoItem--done'}>{name} </p>
      
     <button  onClick={ handleDeleteClick } > Delete</button>
     { 
     editt ? (
                <>
                <input type="text" defaultValue={name} onChange={(e) => setDisc(e.target.value)} />
                <button onClick={()=>editDisc() } >save</button>
                </>
            ):
            (
                <>
                <h4 className={done ? "done":""} onClick={()=> setEditt(true)} >{name}</h4>
                <button onClick={()=> setEditt(true)} >edit</button>
                </>
            )
            }
    </div>
  )
}

export default TodoItem
