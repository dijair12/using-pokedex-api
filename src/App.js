import { useEffect, useState } from 'react';
import api from './services/api';

import './App.css';
import Card from './components/Card/Card';

function App() {
  const [treecko, setTreecko] = useState([]);
  const [error, isError] = useState(false);

  

  useEffect(()=>{
    let list = [];

    getListPokemon();
    pokeApiList(list);

    function getListPokemon(){     
      api.get('?limit=9&offset=40')
        .then(response => {
          const result = response.data.results
          result.forEach(names => {
            return list.push(names.name)
          });
          console.log('response', response.data.results)
          console.log('lista', list)
        })
    }
    function pokeApiList(...list){
      list.forEach((name)=>{
        api.get(`/${name}`)
        .then(response =>{
          setTreecko(response.data);
          isError(true)
          
        })
        .catch((e)=>{
        isError(false)
      })
      })
    }
    
    
  },[])
  // console.log(treecko);
  return (
    <div className="App">
      {treecko.map((name, indice) =>{
        <Card
        key={indice}
        id={name[indice].id}
        name={name[indice].name}
      />
      })}  
      {error ||
        (<h1>Erro, tente novamente mais tarde</h1>)
      }
    </div>
  );
}

export default App;
