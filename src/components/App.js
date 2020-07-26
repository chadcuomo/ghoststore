import React from 'react';
import Nav from './Nav';
import sampleProducts from '../sample-products';
import SmallProduct from'./SmallProduct';
import LargeProduct from './LargeProduct';
import Cart from './Cart';
import Inventory from './Inventory';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import base from '../base';


Modal.setAppElement('#root');

class App extends React.Component {
  state = {
    products: {},
    isOpen: false,
    largeProduct : {},
    order: {}
  };

  static propTypes = {
    match: PropTypes.object
  };

  loadSampleProducts = () => {
    this.setState({ products: sampleProducts });
  };

  componentDidMount() {
    console.log('mounted');
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    }
    this.ref = base.syncState(`${params.storeId}/products`, {
      context: this,
      state: 'products'
    });
    this.loadSampleProducts();
  };
  

  componentWillUnmount() {
    base.removeBinding(this.ref);    
}

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
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
    console.log(largeProduct[key]);
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
    cart.classList.add('open');
  };

  deleteFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };

  closeCart = () => {
    const cart = document.querySelector('.cart-container');
    cart.classList.remove('open');
    cart.classList.add('closed');
  };

  openCart = () => {
    const cart = document.querySelector('.cart-container');
    cart.classList.remove('closed');
    cart.classList.add('open');
  };

  closeInventory = () => {
    const inventory = document.querySelector('.inventory-container');
    inventory.classList.add('closed');
    inventory.classList.remove('open');
  };

  openInventory = () => {
    const inventory = document.querySelector('.inventory-container');
    inventory.classList.remove('closed');
    inventory.classList.add('open');
  };

  addProduct = (product) => {
    const products = { ...this.state.products };
    products[`product${Date.now()}`] = product;
    this.setState({ products });
  };

  updateProduct = (key, updatedProduct) => {
    const products = { ...this.state.products };
    products[key] = updatedProduct;
    this.setState({ products }); 
  }

  deleteProduct = (key) => {
    const products = { ...this.state.products };
    products[key] = null;
    console.log('deleting')
    this.setState({ products });
  }

  render() {
    return (
      <div className="main-container">
        <Cart
        products={this.state.products}
        order={this.state.order}
        deleteFromOrder={this.deleteFromOrder} 
        closeCart={this.closeCart}
        />
        <div className="inventory-container closed">
          <div>
            <button className="visitstore delete" onClick={() => this.closeInventory()}>></button>
          </div>
          <Inventory 
          products={this.state.products}
          addProduct={this.addProduct}
          updateProduct={this.updateProduct}
          deleteProduct={this.deleteProduct}
          closeInventory={this.closeInventory}
          storeId={this.props.match.params.storeId}
          />
        </div>
        <Modal 
        className="modal" 
        isOpen={this.state.isOpen}
        >
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
        <Nav 
        openCart={this.openCart}
        openInventory={this.openInventory}
        />
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
