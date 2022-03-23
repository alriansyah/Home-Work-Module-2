import './App.css';
import NavigationBar from './components/NavigationBar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>

      <main>
        <MainContent />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
