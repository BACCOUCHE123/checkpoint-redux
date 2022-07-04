import {createSlice} from '@reduxjs/toolkit'



const movieSlice = createSlice({
    name : 'todos',
    initialState :{
      todoList:[]
    },
        
reducers :{
  saveTodo: (state , action) =>{
    state.todoList.push(action.payload);
  },
 
  setCheck :(state,action )=>{

    state.todoList.map(item=>{
      if(action.payload === item.id){
      if(item.done===true){
        item.done =false}else{
          item.done =true
        }
      }
      
    }
      
    )
  },
  deleteTodo:(state,action )=>{
    state.todoList.filter (item=> item.id !== action.payload.id);
  }
},
edit :(state,action )=>{
  state.todoList.find(item => item.id === action.payload.id).name = action.payload.name;
  
},

});
export default movieSlice.reducer 
export const { saveTodo ,setCheck , deleteTodo,edit} = movieSlice.actions
export const selectTodoList = state => state.todos.todoList