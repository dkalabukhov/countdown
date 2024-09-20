import TimerInput from './TimerInput.jsx';
import TimerButton from './TimerButton.jsx';
import { useState } from 'react';

const AddTimer = ({ addTimer }) => {
  const EMPTY = { minutes: 0, seconds: 0 };
  const [data, setData] = useState(EMPTY);

  const handleChange = (e) => {
    const time = e.target.value.slice(0, 2);
    setData((value) => ({
      ...value, [e.target.name]: parseInt(time, 10)
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const time = data.minutes * 60 + data.seconds;
    addTimer(time);
  }

  return (
    <form onSubmit={handleSubmit} className="timer timer-new">
      <ul className='parts'>
        <TimerInput time={data.minutes} name='minutes' handleChange={handleChange} />
        <li className='colon'>:</li>
        <TimerInput time={data.seconds} name='seconds' handleChange={handleChange} />
      </ul>
      <TimerButton icon='play' label='play' />
    </form>
  );
};

export default AddTimer;
