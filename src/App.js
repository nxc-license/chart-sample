import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import SankeyDiagramPage from "./pages/SankeyDiagramPage";
import TidyTreePage from "./pages/TidyTreePage";
import NivoSankeyDiagramPage from "./pages/NivoSankeyDiagramPage";
import AmchartSankeyDiagramPage from "./pages/AmchartSankeyDiagramPage";
import CambIntelPage from "./pages/CambIntelPage";
import CytoscapePage from "./pages/CytoscapePage";
import MobilePatentSuitsPage from "./pages/MobilePatentSuitsPage";

const App = () => {
  return (
    <div className="root">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePages />
          </Route>
          <Route path="/sankey-diagram">
            <SankeyDiagramPage />
          </Route>
          <Route path="/tidy-tree">
            <TidyTreePage />
          </Route>
          <Route path="/nivo-sankey-diagram">
            <NivoSankeyDiagramPage />
          </Route>
          <Route path="/amcharts-sankey-diagram">
            <AmchartSankeyDiagramPage />
          </Route>
          {/* <Route path="/cambridge-intelligence">
            <CambIntelPage />
          </Route> */}
          {/* <Route path="/cytoscape">
            <CytoscapePage />
          </Route> */}
          {/* <Route path="/mobile-patent-suits">
            <MobilePatentSuitsPage />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
