

import tasks from "../data/data.js"



function App() {

  // Array di oggetti con stato diverso da completo
  const firstList = tasks.filter((curtask) => curtask.state !== "completed");

  // Array di oggetti con stato completato
  const secondList = tasks.filter((curtask) => curtask.state === "completed");


  // Mappa l'array per creare elementi JSX <li> per ogni oggetto
  const ListJsx = (array) => {
    return array.map((curObj) => (
      <li key={curObj.id}>
        <h3>{curObj.title} <span className={`${curObj.state}`}> {curObj.state}</span> </h3>
        <p>Priority: {curObj.priority}</p>
        <p>Est. timer: {curObj.estimatedTime}</p>
      </li>
    ))
  }

  return (
    <>

      <header className="title-section">
        <h1>Task Manager</h1>
      </header>

      <main>
        
        <section className="tasks-list">
          <h2 className="title-list">Current Tasks ({firstList.length})</h2>
          <ul>
            {ListJsx(firstList)}
          </ul>
        </section>

        <hr />

        <section className="tasks-list">
          <h2 className="title-list">Completed Task ({secondList.length})</h2>
          <ul>
            {ListJsx(secondList)}
          </ul>
        </section>

      </main>
    </>
  )
}

export default App
