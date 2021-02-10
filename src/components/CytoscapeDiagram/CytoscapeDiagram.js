import React from "react";
import CytoscapeComponent from "react-cytoscapejs";
import "./CytoscapeDiagram.css";

const CytoscapeDiagram = () => {
  const elements = [
    { data: { id: "one", label: "Node 1" }, position: { x: 0, y: 0 } },
    { data: { id: "two", label: "Node 2" }, position: { x: 100, y: 0 } },
    {
      data: {
        source: "one",
        target: "two",
        label: "Edge from Node1 to Node2",
      },
    },
  ];

  return (
    <div>
      <CytoscapeComponent
        elements={elements}
        style={{ width: "600px", height: "600px" }}
        // stylesheet={[
        //   {
        //     selector: "node",
        //     style: {
        //       width: 30,
        //       height: 30,
        //       shape: "circle",
        //     },
        //   },
        //   {
        //     selector: "edge",
        //     style: {
        //       width: 10,
        //     },
        //   }]}
      />
      <ol>
        <li>
          <h3>링크</h3>
          <a href="https://js.cytoscape.org/" target="_blank" rel="noreferrer">
            https://js.cytoscape.org/
          </a>
        </li>
        <li>
          <h3>가격</h3>
          <p>- 무료</p>
        </li>
        <li></li>
      </ol>
    </div>
  );
};

export default CytoscapeDiagram;
