import React, { Component } from 'react';
import Notes from './components/notes';

class App
 extends Component {
  state = {  } 
  render() { 
    return (
      <main className='container'>
        <Notes></Notes>
      </main>
    );
  }
}
 
export default App
;