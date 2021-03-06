import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="emptynav"></div>
        <div className="navlogo"> 
          <img src="/images/logo.png" alt="Ghost" className="smallghost" />
        </div>
        <div className="navimg">
          <input 
          type="image" 
          alt="cart" 
          className="navbutton" 
          src="/images/shopping-cart.png"
          onClick={() => this.props.openCart()} 
          />
          <input 
          type="image" 
          alt="inventory" 
          className="navbutton" 
          src="/images/inventory.png"
          onClick={() => this.props.openInventory()}
          />
        </div>
      </div>
    );
  }
}

export default Nav;