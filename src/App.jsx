import { useState } from "react";

import Star from "./component/Star";
import styles from "./component/RatingComponent.module.css";
import Ratings from "./component/Ratings";
import Message from "./component/Message";
import Button from "./component/Button";
import FeedBack from "./component/FeedBack";

export default function App() {
  return (
    <>
      <RatingComponent />
    </>
  );
}

function RatingComponent() {
  const [activeNumber, setActiveNumber] = useState(null);
  const [isRated, setIsRated] = useState(false);

  function handleActiveNumber(index) {
    setActiveNumber(index);
  }
  if (isRated) return <FeedBack activeNumber={activeNumber} />;
  return (
    <div className={styles.container}>
      <Star />
      <Message />
      <Ratings
        activeNumber={activeNumber}
        onHandleActive={handleActiveNumber}
      />
      <Button activeNumber={activeNumber} setIsRated={setIsRated}>
        Submit
      </Button>
    </div>
  );
}
