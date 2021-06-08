import { useEffect, useState } from 'react';
import api from './services/api';

import './App.css';
import Card from './components/Card/Card';

function App() {
  const [treecko, setTreecko] = useState([]);
  const [error, isError] = useState(false); 

  useEffect(() => {
    api.get('?limit=9&offset=40').then(response => {
      const result = response.data.results
      console.log('result', result)

      const pokemonsRequests = result.map(pokemon => api.get(`/${pokemon.name}`));

        Promise.all(pokemonsRequests).then(pokemons => {
          setTreecko(pokemons);
          isError(true);
          console.log('promise', pokemons)});  
        })
    console.log('treecko', treecko);
  }, []);

  console.log('treecko 2', treecko);

  return (
    <div className="App">

      {treecko.length?
      (treecko.map((item, idx) =>{
        return <Card
          key={idx}
          id={item.data.id}
          name={item.data.name}
        />
        })
      ):(
        <h1>Is Loading</h1>
      ) } 
      {error &&
        (<h1>Erro, tente novamente mais tarde</h1>)
      }
    </div>
  );
}

export default App;
