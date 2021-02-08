import React from "react";
import SankeyDiagram from "../components/SankeyDiagram";
import { useHistory } from "react-router-dom";

const SankeyDiagramPage = (props) => {
  const history = useHistory();
  const moveHome = () => {
    history.goBack();
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={moveHome}>
        뒤로가기
      </button>
      <h1>Google Chart - Sankey Diagram</h1>
      <section>
        <SankeyDiagram />
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

export default SankeyDiagramPage;
