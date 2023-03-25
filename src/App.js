import './App.css';
import SoccerPlayerName from './QuizTypes/SoccerPlayerName';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ThisOrThat from './QuizTypes/ThisOrThat';
import MainMenu from './QuizTypes/MainMenu';

function App() {
  return (
    <>
          <head>AA<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8998284748956962"
     crossorigin="anonymous"></script></head>
      <Routes>
        <Route exact path="/" element={  <MainMenu />} />
        <Route exact path="/findMe/big5Teams" element={  <SoccerPlayerName gameType={'big5Teams'}/>} />
        <Route exact path="/findMe/superLig" element={  <SoccerPlayerName gameType={'superLig'}/>} />
        <Route exact path="/thisOrThat" element={  <ThisOrThat />} />
        <Route exact path="/page" element={  <Navbar /> } />
        <Route exact path="/login" element={  <h2>login</h2>} />
        <Route exact path="/soccerPlayerName" element={  <SoccerPlayerName />} />
        <Route exact path="/thisOrThat" element={  <ThisOrThat />} />
        <Route exact path="/thisOrThat/:league" element={  <ThisOrThat />} />
      </Routes>
    </>
  );
}

export default App;
