import { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const [id, setId] = useState("");

   const handleChange = (e) => {
      setId(e.target.value);
   };

   return (
      <div className={styles.searchBar}>
         <input value={id} onChange={handleChange} type='search' />
         <button onClick={() => props.onSearch(id)}>Add!</button>
      </div>
   );
}
