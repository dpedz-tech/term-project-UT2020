import React, { cloneElement } from 'react';
import './App.css';

import HAData from "./data/alaska-mst.json";
import {  InteractiveForceGraph,
  ForceGraphNode,
  ForceGraphLink } from 'react-vis-force';
// import collide from "d3-force/src/collide";

function attachEvents(child) {
  return cloneElement(child, {
    onMouseDown: console.log(`clicked <${child.type.name} />`),
    onMouseOver: console.log(`hovered <${child.type.name} />`),
    onMouseOut: console.log(`blurred <${child.type.name} />`),
  });
}

function App() {

  return (
      <InteractiveForceGraph
          // height={1000}
          // width={1000}
          highlightDependencies
          simulationOptions={{
            strength: {
              collide: 5,

            },
            height: 800, width: 800,

            // animate: true
          }}

          // simulationOptions={{  animate: true }}
          onSelectNode={console.log('node selected')}
          onDeselectNode={console.log('node deselected')}

          showLabels
          // zoom={true}
          // zoomOptions = {{ zoomSpeed: 2,minScale: 100, maxScale:1000 }}
      >
        {HAData.nodes.map(node => (
            <ForceGraphNode
                key={node.id}
                fill={node.group}
                node={{ ...node , radius: 5}}
            />
        )).map(attachEvents)}
        {HAData.links.map(link => (
            <ForceGraphLink
                key={`Weight is ${link.value}`}
                link={{ ...link, value: 1}}
            />
        )).map(attachEvents)}
      </InteractiveForceGraph>
  );
}

export default App;
