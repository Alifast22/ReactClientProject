import logo from './logo.svg';
import './App.css';
import { Home } from './Page/Home';

import { Categories } from './Page/Categories';
import Services from './Page/Services';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Categories/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
