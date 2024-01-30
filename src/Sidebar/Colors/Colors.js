import './Colors.css';
import Input from '../../components/Input';
function Colors({handleChange}) {
  return <div className='color'>
    <h2 className='sidebar-title color-title'>Цвета</h2>
    <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test1"/>
        <span className="chechmark all"></span>Все
      </label>

      <Input
      handleChange={handleChange}
      value="bl"
      title="Черный"
      name="test1"
      color="black"
    />
    <Input
      handleChange={handleChange}
      value="p"
      title="Фиолетовый"
      name="test1"
      color="purple"
    />
    <Input
      handleChange={handleChange}
      value="b"
      title="Синий"
      name="test1"
      color="blue"
    />
    <Input
      handleChange={handleChange}
      value="g"
      title="Серый"
      name="test1"
      color="grey"
    />
    <Input
      handleChange={handleChange}
      value="r"
      title="Красный"
      name="test1"
      color="red"
    />
   

    <label className='sidebar-label-container'>
      <input type='radio' onChange={handleChange} value="w" name='test1'></input>
      <span className='chechmark' style={{background: "white", border: "1px solid black"}}></span>Белый
    </label>
  </div>;
}

export default Colors;