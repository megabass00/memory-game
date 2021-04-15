import styles from "./index.module.css";

const Button = ({ value, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
