import './App.css';
import Header from './components/Header';
import CardCreation from './components/TCardList';

function App() {
  console.log("[App] - Running App.")
  return (
    <div className="App bg-yellow-100">
      <Header />
      <CardCreation />
    </div>
  );
}

export default App;
