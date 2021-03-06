import React from 'react';
import './styles/root.css'
import NavBar from './Components/NavBar/NavBar'
import routes from './routes'

function App() {
  return (
    <div className="App">
        <NavBar/>
        {routes}
    </div>
  );
}

export default App;
