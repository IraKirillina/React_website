import { AiFillStar } from "react-icons/ai";
import {BsFillBagHeartFill} from 'react-icons/bs';

function Card({img, title, star, reviews, prevPrice, newPrice}) {
  return (
  <section className="card">
  <img src={img} alt={title} className="card-img"/>
  <div className="card-details">
     <h3 className="card-title">{title}</h3>
     
     <section className="card-price">
        <div className="price">
           <span className="new-price">{newPrice}</span><del className="old-price">{prevPrice}</del>  
        </div>
        <div className="bag">
           <BsFillBagHeartFill className="bag-icon"/>
        </div>
     </section>
     {/* <section className="card-reviews">
        <AiFillStar className="ratings-star"/><AiFillStar className="ratings-star"/><AiFillStar className="ratings-star"/><AiFillStar className="ratings-star"/><AiFillStar className="ratings-star"/>
        <span className="total-reviews">4</span>
     </section> */}
  </div>
  
  
</section>)
}
export default Card;