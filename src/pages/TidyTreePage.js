import React from 'react';
import TidyTree from '../components/TidyTree';
import { useHistory } from 'react-router-dom';

const TidyTreePage = () => {
  const history = useHistory();
  const moveHome = () => {
    history.goBack();
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={moveHome}>
        뒤로가기
      </button>
      <h1>Tidy Tree</h1>
      <section>
        <TidyTree />
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '60px',
    width: '100%',
    height: 'auto'
  },
  backButton: {
    border: 'none',
    fontSize: '16px',
    padding: '10px 20px',
    cursor: 'pointer'
  }
};

export default TidyTreePage;
