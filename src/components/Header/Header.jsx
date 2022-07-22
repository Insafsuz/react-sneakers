import './Header.scss'
import logo from '../../assets/logo.png'
import { FiShoppingCart } from 'react-icons/fi'
import { FaRegHeart } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__row'>
        <div className='header__logo logo'>
          <img className='logo__img' src={logo} alt='logo'></img>
          <div className='logo__main'>
            <h3 className='logo__title'>React Sneakers</h3>
            <span className='logo__subtitle'>Магазин лучших кроссовок</span>
          </div>
        </div>
        <ul className='header__actions actions-header'>
          <li className='actions-header__item'>
            <FiShoppingCart />
            <span>1205 руб</span>
          </li>
          <li className='actions-header__item '>
            <FaRegHeart className='heart' />
          </li>
          <li className='actions-header__item'>
            <CgProfile />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
