import './Price.css';
import Input from '../../components/Input';
function Price({handleChange}) {
  return( <div className='ml'>
    <h2 className='sidebar-title price-title'>Цена</h2>
    
    <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2"/>
        <span className="chechmark"></span>Все
      </label>    


      <Input
      handleChange={handleChange}
      value="10000"
      title="0-10.000 &#8381;"
      name="test2"
    />
    <Input
      handleChange={handleChange}
      value="15000"
      title="10.000-15.000 &#8381;"
      name="test2"
    />
    <Input
      handleChange={handleChange}
      value="20 000"
      title="от 20.000&#8381;"
      name="test2"
    />
  </div>
  );
}

export default Price;