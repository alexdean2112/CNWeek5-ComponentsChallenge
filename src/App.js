import './App.css';
import Udemy from './components/Udemy'
import Airbnb from './components/Airbnb';

function App() {
  return (
    <div>
      <p className='Challenge1'>Udemy Challenge</p>
      <p className='header'>Students are Viewing</p>
      <Udemy />
      <p className='Challenge1'>AirBnB Challenge</p>
      <p className='header'>Just Booked In United Kingdom</p>
      <Airbnb />
    </div>
  );
}

export default App;
