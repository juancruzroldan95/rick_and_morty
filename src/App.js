import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';

function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      if (id > 0 && id < 827) {
         if (characters.some(character => character.id === parseInt(id))) {
            window.alert('That character ID is already in the screen! Add another ID');
         } else {
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
               setCharacters((oldChars) => [...oldChars, data]);
            });
         }
      } else {
         window.alert('No characters with that ID! Try with a number between 1 and 826.');
      }
   };

   const onClose = (id) => {
      setCharacters(characters.filter(character => character.id !== parseInt(id)));
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
