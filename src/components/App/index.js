import { useState } from "react";
import Layout from "Components/Layout";
import Button from "Components/Button";
import { BrainLight } from "Components/Svg";
import Game from "Components/Game";
import styles from "./index.module.css";

export const IntroTemplate = ({ setShowInit }) => (
  <Layout>
    <div className={styles.brainlight}>
      <BrainLight />
    </div>
    <h1>MeMemory</h1>
    <Button onClick={() => setShowInit(false)} value="Comenzamos" />
  </Layout>
);

const App = () => {
  const [showInit, setShowInit] = useState(true);
  return (
    <>
      {showInit && <IntroTemplate setShowInit={setShowInit} />}
      {!showInit && <Game />}
    </>
  );
};

export default App;
