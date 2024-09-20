import TimerNumber from "./TimerNumber.jsx";

const TimeDisplay = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <ul className='parts'>
      <TimerNumber value={minutes} label='minutes' />
      <li className='colon'>:</li>
      <TimerNumber value={seconds} label='seconds' />
     </ul>
  );
};

export default TimeDisplay;