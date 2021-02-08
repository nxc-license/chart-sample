import React from "react";
import NivoSankeyDiagram from "../components/NivoSankeyDiagram";
import { useHistory } from "react-router-dom";

const NivoSankeyDiagramPage = () => {
  const history = useHistory();
  const moveHome = () => {
    history.goBack();
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={moveHome}>
        뒤로가기
      </button>
      <h1>Nivo - SankeyDiagram</h1>
      <section>
        <NivoSankeyDiagram />
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

export default NivoSankeyDiagramPage;
