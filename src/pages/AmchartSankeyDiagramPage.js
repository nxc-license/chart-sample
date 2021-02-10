import React from "react";
import AmchartSankeyDiagram from "../components/AmchartSankeyDiagram";
import { useHistory } from "react-router-dom";

const AmchartSankeyDiagramPage = () => {
  const history = useHistory();
  const moveHome = () => {
    history.goBack();
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={moveHome}>
        뒤로가기
      </button>
      <h1>amchart - SankeyDiagramPage</h1>
      <section>
        <AmchartSankeyDiagram />
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "60px",
    width: "100%",
    height: "auto",
  },
  backButton: {
    border: "none",
    fontSize: "16px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default AmchartSankeyDiagramPage;
