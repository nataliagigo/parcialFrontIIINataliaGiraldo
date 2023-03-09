import { useState } from 'react'
import { ListaCanciones } from './components/ListaCanciones'
import { Card } from './components/Card'

function App() {
  const [cards, setCards] = useState([])
  const [cards2, setCards2] = useState([])

  function agregarCancion(item){
    const newCard = {
      id: getId(),
      item,
    }
    setCards([...cards,newCard])
  }

  function agregarGenero(item2){
      const newCard2 = {
        id: getId(),
        item2,
      }
      setCards([...cards2,newCard2])
    }
  

  return (
    <div className="App">
      <ListaCanciones agregarCancion={agregarCancion}  agregarGenero={agregarGenero}/>
      <ul>
        {cards.map((elemPedido) => {
          return(
            <Card
              key={elemPedido.id}
              card={elemPedido.name}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default App

