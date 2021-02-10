import React from "react";
import CambIntelDiagram from "../components/CambIntelDiagram";
import { useHistory } from "react-router-dom";

const CambIntelPage = () => {
  const history = useHistory();
  const moveHome = () => {
    history.goBack();
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={moveHome}>
        뒤로가기
      </button>
      <h1>Cambridge intelligence</h1>
      <section>
        <CambIntelDiagram />
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "60px",
  },
  backButton: {
    border: "none",
    fontSize: "16px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default CambIntelPage;
