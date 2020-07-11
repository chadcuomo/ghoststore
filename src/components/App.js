import React from 'react';
import Nav from './Nav';
import sampleProducts from '../sample-products';
import SmallProduct from'./SmallProduct';



class App extends React.Component {
  state = {
    products: {}
  };

  loadSampleProducts = () => {
    this.setState({ products: sampleProducts });
  };

  componentDidMount() {
    this.loadSampleProducts();
  }

  render() {
    return (
      <div className="main-container">
        <Nav />
        <div>
          <img src="/images/Ghost-Hero-image.jpg" alt="HERO" className="hero" />
        </div>
        <div className="bottom-container">
          <div className="header-container">
            <h2 className="shopheader">Shop Supplements</h2>
          </div>
          <div className="products-container">
            {Object.keys(this.state.products).map(key =>
              <SmallProduct
              key={key}
              index={key}
              details={this.state.products[key]}
              />
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
