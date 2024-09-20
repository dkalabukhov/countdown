const TimerNumber = ({ value, label }) => {
  const time = String(value).padStart(2, '0');

  return (
    <li className='part'>
      <p className='number'>{time}</p>
      <p className='unit'>{label}</p>
    </li>
  )
};

export default TimerNumber;