const TimerInput = ({ handleChange, name, time }) => {
  return (
    <li className='part'>
      <input
        type='number'
        className="number"
        name={name}
        id={name}
        value={time}
        onChange={handleChange}
      />
      <label htmlFor={name} className="unit">{name}</label>
    </li>
  )
};

export default TimerInput;