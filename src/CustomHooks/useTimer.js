import { useEffect, useReducer } from 'react';

const reducer = (state, { status }) => {
  switch (status) {
    case 'playing':
      return {...state, isRunning: true };
    case 'paused':
      return {...state, isRunning: false };
    case 'tick':
      if (state.remaining > 0) {
        return {
          ...state,
          isRunning: true,
          remaining: state.remaining - 1,
        }
      }
      return {
        ...state,
        isRunning: false,
        remaining: state.initialTime,
        isCompleted: true,
      }
    case 'reset':
      return {
        ...state,
        isRunning: false,
        remaining: state.initialTime,
        isCompleted: false,
      }
    default:
      return state;
  }
};

const useTimer = (initialTime) => {
  const INITIALVALUE = { initialTime, remaining: initialTime, isRunning: false, isCompleted: false };
  const [state, dispatch] = useReducer(reducer, INITIALVALUE);

  useEffect(() => {
    if (!state.isRunning) return;
    const interval = setInterval(() => dispatch({ status: 'tick'}), 1000);

    return () => clearInterval(interval);
  }, [state.isRunning, dispatch]);

  return { state, dispatch };
};

export default useTimer;
