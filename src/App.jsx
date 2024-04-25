import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    tag: ['Status: Vivo', 'Espécie: Humana', 'Origem: Terra C-137'],
  }

  const item2 = {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    tag: ['Status: Vivo', 'Espécie: Humana', 'Origem: Terra C-138'],
  }
  const item3 = {
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    tag: ['Status: Vivo', 'Espécie: Humana', 'Origem: Terra C-139'],
  }

  const itens = [item1, item2, item3]

  return (
    <>
      {itens.map(function (elemento) {
        return <Card item={elemento} />
      })}
    </>
  )
}

export default App
