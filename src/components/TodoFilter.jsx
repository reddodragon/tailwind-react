const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto   mt-8">
      <div className="shadow-xl flex justify-center gap-4 rounded-md bg-white p-4 dark:bg-gray-800 transition-all dration-1000">
        <button
          className={`${
            filter === "All" ? " text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600"
          }`}
          onClick={() => changeFilter("All")}
        >
          All
        </button>
        <button
          className={`${
            filter === "Active" ? " text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600"
          }`}
          onClick={() => changeFilter("Active")}
        >
          Active
        </button>
        <button
          className={`${
            filter === "Completed" ? " text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600"
          }`}
          onClick={() => changeFilter("Completed")}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
