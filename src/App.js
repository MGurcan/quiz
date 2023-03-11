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
        <Route exact path="/" element={  <Navbar/>} />
        <Route exact path="/page" element={  <h1>bb</h1> } />
        <Route exact path="/login" element={  <h2>login</h2>} />
      </Routes>
    </>
  );
}

export default App;
