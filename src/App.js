import { useState } from 'react';
import './App.css';
import TripList from './components/TripList/index.jsx';

function App() {

  let [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(false)}>Hide trips</button>
      {show && <TripList />}
    </>
  );
}

export default App;
