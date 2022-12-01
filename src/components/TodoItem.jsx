import React from "react";
import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = React.forwardRef(({ todo, updateTodo,removeTodo, ...props }, ref) => {
  const { id, title, completed } = todo;
  return (
    <article ref={ref} {...props} className="flex gap-4 border-b border-b-gray-400 dark:bg-gray-800 dark:border-b-gray-900 transition-all dration-1000">
      <button 
        className={`h-5 w-5 flex-none border-2 rounded-full ${
          completed
            ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block"
        }`

      }
      onClick={() => updateTodo(id)}
      >
        {
          completed && <IconCheck />    
        }
      </button>
      <p className={`grow text-gray-600 dark:text-gray-400 ${completed && "line-through"}`}>{title}</p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
});

export default TodoItem;
