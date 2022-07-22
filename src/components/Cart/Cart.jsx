import './Cart.scss'
import { IoIosClose } from 'react-icons/io'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

const Cart = () => {
  return (
    <div className='cart '>
      <div className='cart__overlay'>
        <div className='cart__content content-cart'>
          <div className='content-cart__sneakers sneakers-cart'>
            <h2 className='sneakers-cart__title'>Корзина</h2>
            <div className='sneakers-cart__item item-sneakers'>
              <div className='item-sneakers__img'></div>
              <div className='item-sneakers__text'>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <span>12 999 руб</span>
              </div>
              <button className='item-sneakers__btn'>
                <IoIosClose />
              </button>
            </div>
            <div className='sneakers-cart__item item-sneakers'>
              <div className='item-sneakers__img'></div>
              <div className='item-sneakers__text'>
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <span>12 999 руб</span>
              </div>
              <button className='item-sneakers__btn'>
                <IoIosClose />
              </button>
            </div>
          </div>
          <div className='content-cart__info info-cart'>
            <ul className='info-cart__list list-cart'>
              <li className='list-cart__item'>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб</b>
              </li>
              <li className='list-cart__item'>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб</b>
              </li>
            </ul>
            <button className='info-cart__btn'>
              Оформить заказ <HiOutlineArrowSmRight className='arrow-r' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
