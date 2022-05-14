import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Logo from 'components/entity/logo/Logo';
import './App.css';
import Twitter from './components/twitter/Twitter';
import Landing from "components/pages/landing/Landing";
import { ThemeProvider } from "styled-components";
import { theme } from "core/theme";


const App = () => {
  return (
    <BrowserRouter basename="/memeSnap">

      <div className="App">

      <Link to="/"><Logo /></Link>

        <header className="App-header">
          <h2>Generate memes of social media post</h2>
        </header>

        <ThemeProvider theme={theme}>

          <section>
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route exact path="twitter" element={<Twitter />} />
            </Routes>

          </section>

        </ThemeProvider>



      </div>

    </BrowserRouter>
  );
}

export default App;
