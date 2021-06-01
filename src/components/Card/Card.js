import React from 'react';
import styles from './Card.module.scss';

export default function Card({
  name,
  id,
}){
  return(
    <div className={styles.cardContainer}>
      <div className={styles.cardChild}>
        <img alt='robots' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} />
        <h2>{name}</h2>
        <p>{id}</p>
      </div>
    </div>
  )
}