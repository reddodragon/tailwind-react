import TodoItem from "./TodoItem";

const TodoList = ({todos,removeTodo, updateTodo}) => {
  return (
    <div className=" overflow-hidden mt-8 rounded-t-md bg-white text-black [&>article]:p-4 dark:bg-gray-800 transition-all dration-1000">
      {todos.map((todo)=>(
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo}updateTodo={updateTodo}/>
      ))}
    </div>
  );
};

export default TodoList;
