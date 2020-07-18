import React from 'react';
import Nav from './Nav';
import sampleProducts from '../sample-products';
import SmallProduct from'./SmallProduct';
import LargeProduct from './LargeProduct';
import Modal from 'react-modal';



class App extends React.Component {
  state = {
    products: {},
    isOpen: false,
    largeProduct : {},
  };

  loadSampleProducts = () => {
    this.setState({ products: sampleProducts });
  };

  componentDidMount() {
    this.loadSampleProducts();
  }

  openModal = (key) => {
    const largeProduct = { ...this.state.largeProduct };
    largeProduct[key] = key;
    this.setState({ largeProduct });
    let isOpen = { ...this.state.isOpen };
    isOpen = true;
    this.setState({ isOpen });
    console.log(largeProduct);
  }

  closeModal = (key) => {
    const largeProduct = { ...this.state.largeProduct };
    delete largeProduct[key];
    this.setState({ largeProduct })
    let isOpen = { ...this.state.isOpen };
    isOpen = false;
    this.setState({ isOpen });
    console.log(largeProduct);
  }

  render() {
    return (
      <div className="main-container">
        <Modal isOpen={this.state.isOpen}>
        {Object.keys(this.state.largeProduct).map(key =>
              <LargeProduct
              key={key}
              index={key}
              details={this.state.products[key]}
              closeModal={this.closeModal}
              />
              )}
        </Modal >
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
              openModal={this.openModal}
              />
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
