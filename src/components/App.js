import React from 'react';
import Nav from './Nav';
import sampleProducts from '../sample-products';
import SmallProduct from'./SmallProduct';
import LargeProduct from './LargeProduct';
import Cart from './Cart';
import Modal from 'react-modal';


Modal.setAppElement('#root');

class App extends React.Component {
  state = {
    products: {},
    isOpen: false,
    largeProduct : {},
    order: {}
  };

  loadSampleProducts = () => {
    this.setState({ products: sampleProducts });
  };

  componentDidMount() {
    this.loadSampleProducts();
  };

  openModal = (key) => {
    const largeProduct = { ...this.state.largeProduct };
    largeProduct[key] = key;
    this.setState({ largeProduct });
    let isOpen = { ...this.state.isOpen };
    isOpen = true;
    this.setState({ isOpen });
  };

  closeModal = (key) => {
    const largeProduct = { ...this.state.largeProduct };
    delete largeProduct[key];
    this.setState({ largeProduct })
    let isOpen = { ...this.state.isOpen };
    isOpen = false;
    this.setState({ isOpen });
  };

  addToOrder = (key) => {
    const cart = document.querySelector('.cart-container');
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
    cart.classList.remove('closed');
  };

  deleteFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };

  closeCart = () => {
    const cart = document.querySelector('.cart-container');
    cart.classList.add('closed');
  };

  openCart = () => {
    const cart = document.querySelector('.cart-container');
    cart.classList.remove('closed');
  };

  render() {
    return (
      <div className="main-container">
        <Cart
        products={this.state.products}
        order={this.state.order}
        deleteFromOrder={this.deleteFromOrder} 
        closeCart={this.closeCart}
        />
        <Modal className="modal" isOpen={this.state.isOpen}>
        {Object.keys(this.state.largeProduct).map(key =>
              <LargeProduct
              key={key}
              index={key}
              details={this.state.products[key]}
              closeModal={this.closeModal}
              addToOrder={this.addToOrder}
              />
              )}
        </Modal >
        <Nav openCart={this.openCart}/>
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
              addToOrder={this.addToOrder}
              />
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
