import './App.css';
import Add from './components/Add';
import TodoItem from './components/TodoItem';
import{useSelector} from 'react-redux'
import{selectTodoList} from './slices/movieSlice'


 
function App() {
  const todoList =useSelector(selectTodoList) 
  return (
    <div className="App">
      <div className="App_container ">
        <div className="App_todoContainer">
      {todoList.map(item =>(
        <TodoItem name ={item.item}
                  done ={item.done}
                  id ={item.id}/>

      ) )}
      </div>
      <Add/>
      </div>
    </div>
  );
}

export default App;
