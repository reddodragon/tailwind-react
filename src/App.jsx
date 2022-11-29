import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

// const initialStateTodos = [
//   {
//     id: 1,
//     title: "go to the gym",
//     completed: true,
//   },
//   {
//     id: 2,
//     title: "complete inscription",
//     completed: true,
//   },
//   {
//     id: 3,
//     title: "hacer la comida",
//     completed: false,
//   },
//   {
//     id: 4,
//     title: "10 minutos de estudio",
//     completed: false,
//   },
//   {
//     id: 5,
//     title: "terminar app",
//     completed: false,
//   },
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos") || [])


const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  const [filter, setFilter] = useState('all')

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  const changeFilter = (filter) => setFilter(filter)

  const filteredTodos = () => {
    switch(filter){
      case 'All':
        return todos;
      case 'Active':
        return todos.filter((todo) => !todo.completed);
      case 'Completed':
        return todos.filter((todo) => todo.completed);
      default: 
        return todos;
    }
  }



  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title:title.trim(),
      completed:false
    }
    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed} : todo))
  }
  
  const computedItemsLeft = todos.filter((todo) => !todo.completed).length
 
  const clearComplete = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  return (
    <div className=" transition-all dration-1000 min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-contain bg-no-repeat text-black dark:bg-gray-900 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] ">
      <Header />

      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        <TodoCreate createTodo={createTodo}/>

        <TodoList  todos={filteredTodos()} updateTodo={updateTodo} removeTodo={removeTodo}/>

        <TodoComputed computedItemsLeft={computedItemsLeft} clearComplete={clearComplete} />

        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="mt-8 text-center text-black dark:text-gray-400">
        Drag and Drop esto pa despues
      </footer>
    </div>
  );
};

export default App;
