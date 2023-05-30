import styles from './Card.module.css'

export default function Card(props) {
   return (
      <div className={styles.card}>
         <button onClick={() => props.onClose(props.id)}>X</button>
         <h2>{props.name}</h2>
         <img src={props.image} alt='' />
         <h4>{props.status}</h4>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
         <h3>{props.origin}</h3>
      </div>
   );
};
