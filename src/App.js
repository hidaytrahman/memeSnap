import './App.css';
import Twitter from './components/twitter/Twitter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Memer</h1>
          <p>If you want a quick laugh, just look up popular memes and you will be inundated with all types of memes.</p>
      </header>

      <section>
        <h2>Create your own meme with Twitter platform</h2>
      </section>

      <section className='memes-area-container'>
       <Twitter />
      </section>
     
      
    </div>
  );
}

export default App;
