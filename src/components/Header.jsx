import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from 'react-icons/fi'
import { useSelector } from 'react-redux'

export const Header = () => {

  const {cartItemse}=useSelector((state)=>state.cart);

  return (
    <nav>
      <div className="con">
        <h2>hotel teesta</h2>
        <div>

            <Link to='/'>Home</Link>
            <Link to='/car'>
                <FiShoppingBag />
                <p>{cartItemse.length}</p>
            </Link>
        </div>
        </div>
    </nav>
  )
}

