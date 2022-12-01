import { Draggable, Droppable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({todos,removeTodo, updateTodo}) => {
  return (
    <Droppable droppableId="todos">

      {(droppableProvided) => (
          <div 
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
          className=" overflow-hidden mt-8 rounded-t-md bg-white text-black [&>article]:p-4 dark:bg-gray-800 transition-all dration-1000">
            {todos.map((todo, index)=>(
              <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                 {(draggableProvided) => (
                   <TodoItem
                   todo={todo}
                   removeTodo={removeTodo}
                   updateTodo={updateTodo}
                   ref={draggableProvided.innerRef}
                   {...draggableProvided.draggableProps}
                   {...draggableProvided.dragHandleProps}
                   />

                 )}

              </Draggable>
            ))}

            {droppableProvided.placeholder}
          </div>
        )}
    </Droppable>
  );
};

export default TodoList;
