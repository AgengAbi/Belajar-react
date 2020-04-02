import React from 'react';
import Tweet from './Tweet'

function App(){
  return(
      <div className="body">
        <h1 className="text-center text-white">Press like button to like Champion</h1>
        <div className="App">
          <Tweet name="Zoe" message="Yes This will be fun Right?"/>
          <Tweet name="Pyke" message="Sink them all"/>
          <Tweet name="Fiddlestick" message="Fear..."/>
        </div>
      </div>
    );
}

export default App;