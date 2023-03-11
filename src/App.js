import './App.css';
import SoccerPlayerName from './QuizTypes/SoccerPlayerName';
import AddTemptDataFirebase from './components/addTempDataFirebase';
import TempConnection from './components/tempconnection';
import { Navbar } from './components/Navbar';
import { Utf16 } from './dummyTrys/utf16';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={  <SoccerPlayerName />} />
        <Route exact path="/page" element={  <Navbar /> } />
        <Route exact path="/login" element={  <h2>login</h2>} />
        <Route exact path="/soccerPlayerName" element={  <SoccerPlayerName />} />
      </Routes>
    </>

  );
}

export default App;
