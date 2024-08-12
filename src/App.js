import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import SuperHero from './components/Superhero';

import "./style/landingPage.css";
function App() {
  return (
    <div>
      {/* Intro */}
      <div className='myBG'>
      <NavigationBar />
      <Intro />
      </div>
      {/* end Intro */}
      {/* Trending */}
      <div className='trending'>
        <Trending />
      </div>
      {/* end Trending */}
      {/* Superhero */}
      <div className='superhero'>
        <SuperHero />
      </div>
      {/* end Superhero */}
    </div>
  );
}

export default App;
