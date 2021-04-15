import styles from "./index.module.css";

const Layout = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>{children}</div>
  </div>
);

export default Layout;
