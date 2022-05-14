import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Logo from 'components/entity/logo/Logo';
import './App.css';
import Twitter from './components/twitter/Twitter';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


const App = () => {
  return (
    <BrowserRouter>

      <div className="App"> 
        <Logo />
        <header className="App-header">
          <h2>Generate memes of social media post</h2>
        </header>


        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="page1" element={<Home />} />
          <Route exact path="page2" element={<About />} />
        </Routes>

        <section>
          <Twitter />
        </section>


      </div>

    </BrowserRouter>


  );
}

export default App;
