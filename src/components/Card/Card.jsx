import './Card.scss'
import { HiPlus } from 'react-icons/hi'

const Card = ({ item }) => {
  return (
    <article className='card'>
      <div className='card__wrapper'>
        <img className='card__img' src={item.imageUrl} alt='sneakers' />
        <p className='card__text'>{item.name}</p>
        <div className='card__footer footer-card'>
          <div className='footer-card__text'>
            <span>Цена:</span>
            <b>{item.price} $</b>
          </div>
          <button className='footer-card__button'>
            <HiPlus />
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card
