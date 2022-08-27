
import '../styles/App.scss';
import Cards from './Cards';

import Navigation from './Navigation';

import Sidebar from './Sidebar';




function App() {
  return (
    <div>
      <Navigation/>
      <main>
        <div className="container">
          <Cards />
          <Sidebar/>
        </div>
      </main>
     
    </div>
  );
}

export default App;


