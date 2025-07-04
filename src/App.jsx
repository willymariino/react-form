import { useState } from 'react'



function App() {
  const [items, setItems] = useState([
    "primo articolo",
    "secondo articolo ",
    "terzo articolo"
  ])

  const [newItem, setNewItem] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()

    setItems([...items, newItem])
    setNewItem("")


  }

  const removeItem = (indexToRemove) => {
    const newArray = items.filter((item, index) => indexToRemove !== index)
    setItems(newArray)
  }



  return (
    <form onSubmit={handleSubmit}>

      <h1>to-do list</h1>

      <ol className='task-card'>

        {items.map((item, index) => (
          < li key={index} >
            <div className='task-row'>
              {item}

              <button className='delete-btn' onClick={() => removeItem(index)}>
                elimina
              </button>
            </div>
            {/* ho notato che se cancello dal basso verso l'alto va tutto bene, mentre se inizio dal mezzo, spariscono 
            anche le scritte sotto, ma rimangono i pulsanti elimina */}
          </li>




        ))}


      </ol >


      <input
        type='text'
        placeholder='aggiungi un articolo'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button className='send-btn'>invia</button>


    </form >
  )

}


export default App
