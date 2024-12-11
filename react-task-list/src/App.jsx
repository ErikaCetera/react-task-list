

const tasks = [
  {
    id: 1,
    title: "Implementare la homepage",
    priority: 1,
    estimatedTime: 120,
    state: "completed"
  },
  {
    id: 2,
    title: "Sviluppare il menu di navigazione",
    priority: 2,
    estimatedTime: 60,
    state: "completed"
  },
  {
    id: 3,
    title: "Creare il footer del sito",
    priority: 3,
    estimatedTime: 30,
    state: "completed"
  },
  {
    id: 4,
    title: "Ottimizzare le performance",
    priority: 1,
    estimatedTime: 180,
    state: "completed"
  },
  {
    id: 5,
    title: "Scrivere test per i componenti",
    priority: 2,
    estimatedTime: 90,
    state: "completed"
  },
  {
    id: 6,
    title: "Implementare la pagina dei contatti",
    priority: 3,
    estimatedTime: 60,
    state: "completed"
  },
  {
    id: 7,
    title: "Aggiungere animazioni CSS",
    priority: 2,
    estimatedTime: 30,
    state: "backlog"
  },
  {
    id: 8,
    title: "Integrare l'API di autenticazione",
    priority: 1,
    estimatedTime: 120,
    state: "in_progress"
  },
  {
    id: 9,
    title: "Aggiornare la documentazione",
    priority: 3,
    estimatedTime: 60,
    state: "backlog"
  },
  {
    id: 10,
    title: "Rifattorizzare il codice CSS",
    priority: 2,
    estimatedTime: 90,
    state: "in_progress"
  }
];



function App() {

  // array di oggetti con stato completato
  const firstList = tasks.filter((curtask) => curtask.state === "completed");

  // array di oggetti con stato diverso da completo
  const secondList = tasks.filter((curtask) => curtask.state !== "completed");


  //array liste da firstlist tramite map
  const firstListJsx = firstList.map((curObj) => (
    <li key={curObj.id}>
      <h3>{curObj.title} <span>- {curObj.state}</span></h3>
      <p>Priority: {curObj.priority}</p>
      <p>Est. timer: {curObj.estimatedTime}</p>
    </li>
  ))

  const secondListJsx = secondList.map((curObj) => (
    <li key={curObj.id}>
      <h3>{curObj.title} <span>-{curObj.state}</span> </h3>
      <p>Priority: {curObj.priority}</p>
      <p>Est.timer: {curObj.estimatedTime}</p>
    </li>
  ))





  return (
    <>
    <h1 className="title">Task Manager</h1>
      <h2>Current Tasks ({secondListJsx.length})</h2>
      <ul>
        {secondListJsx}
      </ul>
      <hr />
      <h2>Completed Task ({firstListJsx.length})</h2>
      <ul>
        {firstListJsx}
      </ul>
    </>
  )
}

export default App
