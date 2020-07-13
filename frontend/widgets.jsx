import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const panes = [
  {title: 'one', content: 'First pane'},
  {title: 'two', content: 'Second pane'},
  {title: 'three', content: 'Third pane'}
]


function Root() {
  return(
    <div>
      <Clock/>
      <Weather />
      <div className='interactive'>
        <Tabs panes={panes}/>
      </div>
      
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
