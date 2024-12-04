import MultiplicationTable from './MultiplicationTable';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Tabuada</h1>
      </header>
      <main>
        {Array.from({ length: 8 }, (_, index) => index + 2).map((number) => (
          <MultiplicationTable key={number} number={number} />
        ))}
      </main>
      <footer>
        <p>
          <time datetime={new Date().getFullYear()}>
            {new Date().getFullYear()}
          </time> {''} 
          Tabuada feita com React.
        </p>
      </footer>
    </div>
  );
}