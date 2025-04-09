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



  return (
    <form onSubmit={handleSubmit}>

      <h1>blog superfico</h1>
      <ul>
        {items.map((item, index) => (
          < li key={index} >
            {item}
            <button onClick={() => removeItem(index)}>
              elimina
            </button>
          </li>

        ))}

      </ul >

      <input
        type='text'
        placeholder='aggiungi un articolo'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button>invia</button>


    </form >
  )

}


export default App
