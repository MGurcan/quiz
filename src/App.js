import './App.css';
import SoccerPlayerName from './QuizTypes/SoccerPlayerName';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ThisOrThat from './QuizTypes/ThisOrThat';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={  <SoccerPlayerName gameType={'big5Teams'} />} />
        <Route exact path="/big5Teams" element={  <SoccerPlayerName gameType={'big5Teams'}/>} />
        <Route exact path="/superLig" element={  <SoccerPlayerName gameType={'superLig'}/>} />
        <Route exact path="/page" element={  <Navbar /> } />
        <Route exact path="/login" element={  <h2>login</h2>} />
        <Route exact path="/soccerPlayerName" element={  <SoccerPlayerName />} />
        <Route exact path="/thisOrThat" element={  <ThisOrThat />} />
      </Routes>
    </>

  );
}

export default App;
