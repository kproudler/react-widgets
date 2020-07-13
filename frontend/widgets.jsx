import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

const panes = [
  {title: 'one', content: 'First pane'},
  {title: 'two', content: 'Second pane'},
  {title: 'three', content: 'Third pane'}
]


function Root() {
  return(
    <div>
      <Clock/>
      <Tabs panes={panes}/>
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
