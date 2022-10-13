
const App = () => {


  return (
  
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain ">
      
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between align-middle">
          <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.5em]">Todo</h1>
          <button>luna</button>

        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 ">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input className="w-full text-gray-400 outline-none" type="text" placeholder="create a new todo..."/>
        </form>
      </header>


      <main className="container mx-auto px-4">
        <article>
          <button>circulo</button>
          <p>Complete online Javascript curse in bluuweb</p>
          <button>X</button>
        </article>
        <article>
          <button>circulo</button>
          <p>Complete online Javascript curse in bluuweb</p>
          <button>X</button>
        </article>
        <article>
          <button>circulo</button>
          <p>Complete online Javascript curse in bluuweb</p>
          <button>X</button>
        </article>

        <section>
          <span>5 items left</span>
          <button>Clear Complete</button>
        </section>
      </main>

      <section className="container mx-auto px-4">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>

      <p className="text-center">Drag and Drop esto pa despues</p>
    </div>
  )

  
}

export default App
