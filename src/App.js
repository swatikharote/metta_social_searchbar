import logo from './logo.svg';
import './App.css';

import { Search } from './components/Search';
import { Countries } from './components/Countries';
import { useState } from 'react';

function App() {

  const [countries, setCountries] = useState([]);

  const getCountries = (arr) => {
    setCountries(arr);
  }


  return (
    <div className="App">
      <Search getCountries={getCountries} />
      <Countries countries={countries} />
    </div>
  );
}

export default App;
