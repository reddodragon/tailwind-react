import CrossIcon from "./components/icons/CrossIcon";
import Moon from "./components/icons/Moon";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat text-black">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between align-middle">
          <h1 className="text-2xl font-semibold uppercase tracking-[0.5em] text-white">
            Todo
          </h1>
          <button>
            <Moon color="#000"/>
          </button>
        </div>
        <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="create a new todo..."
          />
        </form>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <div className="rounded-md bg-white text-black [&>article]:p-4">
          <article className="flex gap-4 border-b border-b-gray-400  ">
            <button className="inline-block h-5 w-5 rounded-full border-2 flex-none"></button>
            <p className="grow text-gray-600">
              Complete online Javascript curse in bluuweb
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex flex-none gap-4 border-b border-b-gray-400  ">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online Javascript curse in bluuweb
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex flex-none gap-4 border-b border-b-gray-400 ">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online Javascript curse in bluuweb
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
         

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Complete</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4  mt-8">
        <div className="flex bg-white p-4 rounded-md justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>

        </div>
      </section>

      <p className="text-center text-black mt-8">Drag and Drop esto pa despues</p>
    </div>
  );
};

export default App;
