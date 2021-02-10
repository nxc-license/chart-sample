import React from "react";
import CytoscapeDiagram from "../components/CytoscapeDiagram";
import { useHistory } from "react-router-dom";

const CytoscapePage = () => {
  const history = useHistory();
  const moveHome = () => {
    history.goBack();
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={moveHome}>
        뒤로가기
      </button>
      <h1>Cytoscape</h1>
      <section>
        <CytoscapeDiagram />
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

export default CytoscapePage;
