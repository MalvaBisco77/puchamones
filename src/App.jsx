
import React from 'react';
import './App.css';
import hoopa from './assets/hoopa.jpg'; 
import lucario from './assets/lucario.jpg'; 
import melmetal from './assets/melmetal.png';
import Raycuaza from './assets/Raycuaza.png';
import Regigigas from './assets/Regigigas.jpg';
import Swampert from './assets/Swampert.png';

const pokemonImages = [
  { id: 1, src: hoopa, name: 'hoopa' },
  { id: 2, src: lucario, name: 'lucario' },
  { id: 3, src: melmetal, name: 'melmetal' },
  { id: 4, src: Raycuaza, name: 'Raycuaza' },
  { id: 5, src: Regigigas, name: 'Regigigas' },
  { id: 6, src: Swampert, name: 'Swampert' },
];

const App = () => {
  return (
    <div className="gallery">
      {pokemonImages.map(pokemon => (
        <div key={pokemon.id} className="gallery-item">
          <img src={pokemon.src} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
