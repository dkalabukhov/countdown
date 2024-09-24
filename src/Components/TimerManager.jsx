import _ from 'lodash';
import { useState } from 'react';
import AddTimer from './AddTimer.jsx';
import TimerItem from './TimerItem.jsx';

const generateId = () => _.uniqueId('timer_');

const TimerManager = () => {
  const [timers, setTimers] = useState([{ time: 60, id: generateId() }])
  const [isAdding, setAdding] = useState(false);

  const addTimer = (time) => {
    const id = generateId();
    setTimers([...timers, { time, id }]);
    setAdding(false);
  }

  const removeTimer = (idToDelete) => {
    setTimers((oldTimers) => oldTimers.filter(({id}) => id !== idToDelete));
  }

  return (
    <div className='timers'>
      {timers.map((timer) => (
        <TimerItem key={timer.id} id={timer.id} startTime={timer.time} removeTimer={removeTimer} />
      ))}
      {isAdding
      ? <AddTimer addTimer={addTimer} />
      : <button className='timer timer-add' title='add timer' onClick={() => setAdding(true)}>+</button> }
    </div>
  );
};

export default TimerManager;
