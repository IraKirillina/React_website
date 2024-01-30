import Buttons from "../components/Buttons";
import "./Recommended.css";

function Recommended({handleClick}) {
  return <>
    <div>
      
      <div className="recommended-flex">
      
        {/* <button className="btns">Вся обувь</button> */}
        <Buttons onClickHandler={handleClick} value="f" title="Женская"/>
        <Buttons onClickHandler={handleClick} value="m" title="Мужская"/>
        <Buttons onClickHandler={handleClick} value="k" title="Детская"/>
        {/* <button className="btns">Jordan</button>
        <button className="btns">Air Max</button>
        <button className="btns">Air Force</button>
        <button className="btns">Dunk</button> */}
      </div>
    </div>
  </>
}
export default Recommended;