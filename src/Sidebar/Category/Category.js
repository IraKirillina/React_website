import "./Category.css";
import Input from "../../components/Input";

function Category({handleChange}) {
  return(

  <div className="category">
    <h2 className="sidebar-title">Категории</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test"/>
        <span className="chechmark"></span>Все
      </label>
    
    
    <Input
      handleChange={handleChange}
      value="Max"
      title="Air Max"
      name="test"
    />
    <Input
      handleChange={handleChange}
      value="Force"
      title="Air Force"
      name="test"
    />
    <Input
      handleChange={handleChange}
      value="Dunk"
      title="Dunk"
      name="test"
    />
    

  </div>
  );
}
export default Category;