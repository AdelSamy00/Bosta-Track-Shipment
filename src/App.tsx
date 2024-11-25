import './App.css';
import { Routes, Route } from 'react-router-dom';
import TrackShipment from './pages/TrackShipment';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TrackShipment />} />
      </Routes>
    </>
  );
}

export default App;
