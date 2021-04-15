import Button from "Components/Button";
import styles from "./index.module.css";
import { formattedTime } from "Utils";

const EndGame = ({ handleTryAgain, playTime }) => {
  const endTime = new Date().getTime();
  const playTimeFormatted = formattedTime(endTime - playTime);
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.wrapper}>
          <div className={styles.row}>
            <span className={styles.completed}>¡Completado!</span>
            <span className={styles.time}>{playTimeFormatted}</span>
          </div>
          <Button onClick={() => handleTryAgain()} value="Jugar otra vez" />
        </div>
      </div>
    </div>
  );
};

export default EndGame;
