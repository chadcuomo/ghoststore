import React from 'react';
import Nav from './Nav';



class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Nav />
        <div>
          <img src="/images/Ghost-Hero-image.jpg" alt="HERO" className="hero" />
        </div>
      </div>
    );
  }
}

export default App;
