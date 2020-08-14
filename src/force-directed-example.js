
import React from 'react';
import HAData from './data/united.json';

import './force-directed.scss';
import ForceDirectedGraph from './force-directed-graph';

export default class ForceDirectedExample extends React.Component {
  state = {
    strength: Math.random() * 60 - 30
  };

  render() {
    const {strength} = this.state;
    return (
      <div className="force-directed-example">
        <button
          className="showcase-button"
          onClick={() => this.setState({strength: Math.random() * 60 - 30})}
        >
          {' '}
          REWEIGHT{' '}
        </button>
        <ForceDirectedGraph
          data={HAData}
          height={500}
          width={500}
          animation
          strength={strength}
        />
      </div>
    );
  }
}
