import styles from './TurnTracker.module.css';

const TurnTracker: any = ({turn, setTurn}: any) => {

  return (
    <section className={styles.container}>
      <label className={styles.label}>Battle:</label>
      <h2 className={styles.name}>Riverside Melee</h2>
      <label className={styles.label}>Current Combatant:</label>
      <h2 className={styles.name}>{turn.name}</h2>
      <button className={styles.button}>End Turn</button>
    </section>
  )
}

export default TurnTracker;
