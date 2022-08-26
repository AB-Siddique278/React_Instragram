
import '../styles/App.scss';

import Navigation from './Navigation';
import Cards from "./Cards";
import Sidebar from './Sidebar';



function App() {
  return (
    <div>
      <Navigation/>
      <main>
        <div>
          <Cards></Cards>
          <Sidebar></Sidebar>
        </div>
      </main>
     
    </div>
  );
}

export default App;


// echo "# React_Instragram" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/AB-Siddique278/React_Instragram.git
// git push -u origin main