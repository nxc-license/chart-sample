import React from "react";
import { Link } from "react-router-dom";

const HomePages = () => {
  return (
    <nav style={styles.container}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/sankey-diagram">Google Chart - Sankey Diagram</Link>
        </li>
        <li style={{ ...styles.li, marginLeft: "20px" }}>
          <Link to="/tidy-tree">3D - Tidy Tree</Link>
        </li>
        <li style={{ ...styles.li, marginLeft: "20px" }}>
          <Link to="/nivo-sankey-diagram">Vino - Network</Link>
        </li>
        {/* <li style={styles.li}>
          <Link to="/mobile-patent-suits">Mobile Patent Suits</Link>
        </li> */}
      </ul>
    </nav>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ul: {
    padding: 0,
    listStyle: "none",
    display: "flex",
  },
  li: {
    fontSize: "24px",
  },
};

export default HomePages;
