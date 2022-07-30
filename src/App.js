import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Card, Cart, Header } from './components'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://62e51da8c6b56b45118f4462.mockapi.io/items')
      .then(res => res.json())
      .then(json => setItems(json))
  }, [])

  console.log(items)

  return (
    <div className='wrapper'>
      <Header />
      <main className='page'>
        <section className='sneakers '>
          <div className='container'>
            <div className='sneakers__top top-sneakers'>
              <h2 className='top-sneakers__title'>Все кроссовки</h2>
              <form action='#' className='top-sneakers__form'>
                <button>
                  <FiSearch />
                </button>
                <input type='text' placeholder='Поиск...' />
              </form>
            </div>
            <div className='sneakers__items '>
              {items.map(item => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
