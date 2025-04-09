import { useState } from 'react'



function App() {
  const [items, setItems] = useState([
    "primo articolo",
    "secondo articolo ",
    "terzo articolo"
  ])

  const [newItem, setNewItem] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    alert("form inviato")

  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type='text'
        placeholder='aggiungi un articolo'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button>invia</button>



      <h1>blog superfico</h1>
      <ul>
        {items.map((item, index) => (
          < li key={index} > {item}</li>

        ))}
      </ul >

    </form >
  )

}

export default App
