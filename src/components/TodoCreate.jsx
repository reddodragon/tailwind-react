import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    
    if(!title.trim()){
      return setTitle('')
    }
    createTodo(title)
    setTitle('')
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="shadow-xl  flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 dark:bg-gray-800 transition-all dration-1000"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        className=" transition-all dration-1000 w-full text-gray-400 outline-none dark:bg-gray-800"
        type="text"
        placeholder="create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
