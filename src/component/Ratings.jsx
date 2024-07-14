import styles from "./Ratings.module.css";

function Ratings({ activeNumber, onHandleActive }) {
  return (
    <div className={styles.numberContainer}>
      {Array.from({ length: 5 }).map((num, i) => (
        <Number
          num={i + 1}
          index={i + 1}
          key={i}
          onHandle={onHandleActive}
          isActive={activeNumber === i + 1}
        />
      ))}
    </div>
  );
}

function Number({ num, index, onHandle, isActive }) {
  return (
    <div
      onClick={() => onHandle(index)}
      className={`${styles.numberBackground} ${isActive ? styles.active : ""}`}
    >
      <span className={styles.number}>{num}</span>
    </div>
  );
}

export default Ratings;
