import { FiSearch } from 'react-icons/fi'
import { Card, Cart, Header } from './components'

function App() {
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
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>
      </main>
      <Cart />
    </div>
  )
}

export default App
