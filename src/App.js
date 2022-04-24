import './App.css';
import Twitter from './components/twitter/Twitter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
          <h1>MemeSnap</h1>
          <h2>Generate memes of social media post</h2>
      </header>

      <section>
        <Twitter />
      </section>
      
      
    </div>
  );
}

export default App;
