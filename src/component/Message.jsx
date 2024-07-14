import styles from "./Message.module.css";

function Message() {
  return (
    <>
      <h2 className={styles.headLine}>How did we do?</h2>
      <p className={styles.text}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </>
  );
}

export default Message;
