import TimeDisplay from './TimeDisplay.jsx';
import TimerButton from './TimerButton.jsx';
import useTimer from '../CustomHooks/useTimer.js';

const Timer = ({ startTime, removeTimer, id }) => {
  const {
    state: { isRunning, isCompleted, remaining },
    dispatch
  } = useTimer(startTime);

  const timerClasses = [
    'timer',
    isRunning ?'timer-ticking' : '',
    isCompleted ? 'timer-ringing' : ''
  ].filter((item) => item).join(' ');

  const handleDelete = () => removeTimer(id);

  const audio = new Audio('/timeout.mp3');
  if (isCompleted) {
    audio.play();
  }

  return (
    <section className={timerClasses}>
      <TimeDisplay time={remaining} />
      {isRunning
      ? <TimerButton icon='pause' label='pause' onClick={() => dispatch({ status: 'paused' })}  />
      : <TimerButton icon='play' disabled={isCompleted} label='play' onClick={() => dispatch({ status: 'playing' })} />
      }
      <TimerButton icon='restart' label='restart' onClick={() => dispatch({ status: 'reset' })} />
      <TimerButton icon='trash' label='remove' onClick={() => handleDelete()} />
    </section>
  );
};

export default Timer;
