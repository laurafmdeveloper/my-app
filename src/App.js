import logo from './logo.svg';
import './App.css';
import Array from './array/Array';
import Calendar from './calendar/Calendar';
import User from './user/user'
import calendar from './calendar/Calendar';
import './calendar/calendar.css'

function App() {
  const name = "Laura"
  return (
    <>
      <User/>
      <Calendar/>
      <Array/>
      <div>Hello {name}</div>
    </>
  );
}

export default App;
