import { useEffect, useState } from 'react';
import api from './services/api';

import './App.css';
import Card from './components/Card/Card';

function App() {
  const [treecko, setTreecko] = useState([]);

  function getListPokemon(){
    const list = []
    api.get('?limit=9&offset=40')
      .then(response => {
        // list.push(response.data.results.name);
        console.log(response.data.results.name)
      })
  }
  getListPokemon();

  useEffect(()=>{
    function pokeApiList(){
      api.get('/treecko')
      .then(response =>{
        setTreecko(response.data);
        // console.log(response.data);
      })
    }

    pokeApiList();    
  },[])

  return (
    <div className="App">
      <Card 
        id={treecko.id}
        name={treecko.name}
      />
      <Card 
        id={treecko.id}
        name={treecko.name}
      />
      <Card 
        id={treecko.id}
        name={treecko.name}
      />
    </div>
  );
}

export default App;
