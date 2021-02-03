import React from 'react';
import MobilePatentSuits from '../components/MobilePatentSuits';
import { useHistory } from 'react-router-dom';

const MobilePatentSuitsPage = () => {
  const history = useHistory();
  const moveHome = () => {
    history.goBack();
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={moveHome}>
        뒤로가기
      </button>
      <h1>Mobile Patent Suits</h1>
      <section>
        <MobilePatentSuits />
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '60px'
  },
  backButton: {
    border: 'none',
    fontSize: '16px',
    padding: '10px 20px',
    cursor: 'pointer'
  }
};

export default MobilePatentSuitsPage;
