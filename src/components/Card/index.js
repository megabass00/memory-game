import { useMemo } from "react";
import FlipCard from "flip-card-react";
import styles from "./index.module.css";
import { FLIP_SPEED } from "Constants";

const Card = ({ index, image, flipped, complete, onClick }) => {
  const front = useMemo(() => <div className={styles.front}>{index + 1}</div>, [
    index,
  ]);
  const back = useMemo(
    () => (
      <div className={styles.back} data-testid="back">
        <img src={image} className={styles.image} alt="" />
      </div>
    ),
    [image]
  );

  return (
    <div onClick={() => onClick(index)} className={styles.card}>
      <FlipCard
        isFlipped={flipped || complete}
        front={front}
        back={back}
        speed={FLIP_SPEED}
      />
    </div>
  );
};

export default Card;
