import { useState } from 'react'



function App() {
  const [items, setItems] = useState([
    "primo articolo",
    "secondo articolo ",
    "terzo articolo"
  ])

  const handleSubmit = () => {
    alert("form inviato")

  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type='text'
        value={items}
        onChange={e => { setItems(e.target.value) }}>
        <button>invia</button>
      </input>


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
