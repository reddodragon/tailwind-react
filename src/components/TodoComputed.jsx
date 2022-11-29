
const TodoComputed = ({computedItemsLeft, clearComplete}) => {
  return (
    <section className="shadow-xl transition-all dration-1000 rounded-b-md py-4 px-4 flex justify-between bg-white dark:bg-gray-800">
        <span className="text-gray-400">{computedItemsLeft} items left</span>
        <button onClick={clearComplete} className="text-gray-400">Clear Complete</button>
    </section>
  )
}

export default TodoComputed