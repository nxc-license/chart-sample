import React from "react";
import { Link } from "react-router-dom";

const HomePages = () => {
  return (
    <div>
      <nav style={styles.container}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link to="/sankey-diagram">Google Chart - Sankey Diagram</Link>
          </li>
          <li style={{ ...styles.li }}>
            <Link to="/tidy-tree">3D - Tidy Tree</Link>
          </li>
          <li style={{ ...styles.li }}>
            <Link to="/nivo-sankey-diagram">Nivo - Sankey Diagram</Link>
          </li>
          <li style={{ ...styles.li }}>
            <Link to="/amcharts-sankey-diagram">Amcharts - Sankey Diagram</Link>
          </li>
          {/* <li style={{ ...styles.li }}>
            <Link to="/cytoscape">Cytoscape</Link>
          </li> */}
          {/* <li style={{ ...styles.li }}>
            <Link to="/cambridge-intelligence">Cambridge Iintelligence</Link>
          </li> */}
          {/* <li style={styles.li}>
          <Link to="/mobile-patent-suits">Mobile Patent Suits</Link>
        </li> */}
        </ul>
      </nav>
      <h2>그 외 서칭한 목록</h2>
      <ul>
        <li>
          <a
            href="https://uber.github.io/react-vis/examples/showcases/sankeys"
            target="_blank"
            rel="noreferrer"
          >
            React-Vis(무료)
          </a>
        </li>
        <li>
          <a
            href="https://plotly.com/javascript/sankey-diagram/"
            target="_blank"
            rel="noreferrer"
          >
            plotly(무료)
          </a>
        </li>
        <li>
          <a
            href="https://gojs.net/latest/samples/sankey.html"
            target="_blank"
            rel="noreferrer"
          >
            gojs(Default: 3 year distribution: $6,990)
          </a>
        </li>
        <li>
          <a
            href="https://www.fusioncharts.com/charts/sankey-diagram"
            target="_blank"
            rel="noreferrer"
          >
            fusioncharts(유료(https://www.fusioncharts.com/buy))
          </a>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "40vh",
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
  },
  li: {
    fontSize: "24px",
  },
};

export default HomePages;
