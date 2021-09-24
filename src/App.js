// import logo from './logo.svg';
// import './App.css';
import Register from "./components/Register/Register";
import Schedule from "./components/Schedule/Schedule";
import RegisterSpectrum from "./components/RegisterSpectrum/RegisterSpectrum";
import talks from "./data/talks.json";

function App() {
  return (
    <div className="App container mt-4">
      <header className="App-header"> 
      <h1 class="visually-hidden"> Fepro Accessible </h1>
      </header>
      <main id="content">
      <Schedule talks={talks}/>
      <Register/>
      <RegisterSpectrum/>
      </main>
    </div>
  );
}

export default App;
