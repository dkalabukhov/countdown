import './style.css';

import TimerManager from './Components/TimerManager.jsx';

const App = () => {
  return (
    <main className='wrapper'>
      <h1 className='title'>Countdown</h1>
      <TimerManager />
    </main>
  );
};

export default App;
