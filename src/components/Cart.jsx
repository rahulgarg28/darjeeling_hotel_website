import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';


export const Cart = () => {
  const { cartItemse, subTotal, tax,  total } = useSelector((state) => state.cart);
    
      const dispatch =useDispatch();


      const incre = (id) => {
              dispatch({
                type:"addToCart",payload:{id},
              })
              dispatch({
                type:"calculatePrice",
              })
      };

      const decre = (id) => {
              dispatch({
                type:"decre",payload: id,
              })
              dispatch({
                type:"calculatePrice",
              })
      };

      const deleteH = (id) => {
              dispatch({
                type:"deleteFromCart",payload: id,
              })
              dispatch({
                type:"calculatePrice",
              })
      };

  return (
    <div className="cart">
        <main>
        {cartItemse.length > 0 ? (
          cartItemse.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decre={decre}
              incre={incre}
              deleteH={deleteH}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>
           
        <aside>
            <h2>Subtotal: Rs{subTotal}</h2>
            <h2>GST-12%: Rs{tax}</h2>
            <h2>Total: Rs{total}</h2>
        </aside>
    </div>
  )
}

const CartItem =({imgSrc,name,price,qty,decre,incre,deleteH,id})=> (
    <div className="cartItem">
        <img src={imgSrc} alt="item" />
        <article>
            <h3>{name}</h3>
            <p>Rs{price}</p>
        </article>

        <div>
            <button onClick={()=>decre(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=>incre(id)}>+</button>
        </div>

        <AiFillDelete onClick={()=>deleteH(id)}/>
    </div>

)
