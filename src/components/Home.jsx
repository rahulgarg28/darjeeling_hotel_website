import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import img2 from "../assets/img2.jpg"
import img1 from "../assets/img1.jpg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpeg"
import bg from "../assets/bg.jpeg"

export const Home = () => {

      const productList =[
        {name:"Deluxe Room",price:1200,imgSrc:img1, id:"ddr"},
        {name:"4 bedded room",price:3500,imgSrc:img2, id:"sddr"},
        {name:"3 bedded room",price:2500,imgSrc:img3, id:"3ddr"},
        {name:"luxury room",price:3000,imgSrc:img4, id:"lddr"}, 
      ];

      const dispatch = useDispatch()

      const addToCartHandle = (options)=>{
        console.log(options);
        dispatch({type:"addToCart",payload:options})
        dispatch({
          type:"calculatePrice",
        })
        toast.success("Added To cart")
        
      };

      return (
        <>
        <Banner/>
        <div className="home">
          <div className="container">
          {
            productList.map((i)=>(
              <ProdectCart key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} id={i.id} handler={addToCartHandle}/>
            ))
          }
          </div>
        </div>
        <Help />
        <CopyRight/>
        </>
      );
}

const ProdectCart =({name,id,price,handler,imgSrc}) => (
  <div className='productCart'>
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>Rs{price}</h4>
    <button onClick={()=>handler({name,price,id,quantity:1 ,imgSrc})}>Add to cart</button>
  </div>
)



const Banner =()=>(
  <div className="top">
    <img src={bg} alt="" />
    <div className="text">
      <h1>HOTEL  TEESTA</h1>
      <p>The best service, food, drinks, rooms, views.</p>
    </div>
</div>
)

const Help = () =>(
  <div className="bg">
    <img src={bg} alt="" className='bgimage'/>
    <div className="bg-cont">
      
      <div className="text1">
        <input className='tt' type="text" placeholder="Search your dream destination"/>
        <button className='btm'>Search</button> 
      </div>
    </div>
  </div>
)

const CopyRight = () =>(
  <div className="t">
    <div className="te">
      <a href="https://www.instagram.com/_rahulgarg1/">Instagram</a>
      <p>Copyright @Rahul Garg 2023</p>
      <a href="https://www.linkedin.com/in/rahul-garg-b59751144/">Linkedin</a>
      
    </div>
  </div>
)



