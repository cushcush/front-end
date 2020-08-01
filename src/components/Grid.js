import React from 'react';
import ShowcaseLayout from './Layout'

// The Roster component matches one of two different routes
// depending on the full pathname
const Grid = () => (
    <div>
        <div className="layoutJSON">
          Displayed as <code>[x, y, w, h]</code>:
          <div className="columns">{this.stringifyLayout()}</div>
        </div>
        <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
    </div>
);

export default Grid;
