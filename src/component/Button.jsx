import styles from "./Button.module.css";
function Button({ children, activeNumber, setIsRated }) {
  function handleSubmit() {
    if (activeNumber) {
      setIsRated(true);
    }
  }
  return (
    <button onClick={handleSubmit} className={styles.btn}>
      {children}
    </button>
  );
}

export default Button;
