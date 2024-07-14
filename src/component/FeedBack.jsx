import styles from "./FeedBack.module.css";
function FeedBack({ activeNumber }) {
  return (
    <div className={styles.feedback}>
      <img src="/illustration-thank-you.svg" alt="Thank you illustration" />
      <p className={styles.result}>You selected {activeNumber} out of 5</p>
      <h2>Thank You!</h2>
      <p className={styles.thanksText}>
        We appreciated you taking the time to give a rating.
        <br /> if you ever need more support, don't hesitate to
        <br />
        get in touch!
      </p>
    </div>
  );
}

export default FeedBack;
