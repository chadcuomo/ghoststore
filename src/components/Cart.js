import React from 'react';
import {formatPrice} from '../helpers';

class Cart extends React.Component {
  renderOrder = (key) => {
    const product = this.props.products[key];
    const count = this.props.order[key];
    const isAvailable = product && product.status === 'available';
    if (!product) return null;
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {product ? product.name : 'product'} is no longer available
        </li>
      );
    }
    return (
      <li  className="cart-item" key={key}>
        <span>
          <div className="product-name">
            {count} {product.name}
          </div>
          <div className="product-price">
            {formatPrice(count * product.price)}
            <button className="visitstore delete" onClick={() => this.props.deleteFromOrder(key)}>X</button>
          </div>
          <hr />
        </span>
      </li>
    );
  }
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const product = this.props.products[key];
      const count = this.props.order[key];
      const isAvailable = product && product.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * product.price);
      }
      return prevTotal;
    }, 0);
    return (
      <div className="cart-container closed">
        <div>
        <button  className="close-cart"onClick={() => this.props.closeCart()}>></button>
        </div>
        <div>
        <h2>Cart</h2>
        <ul>
          {orderIds.map(this.renderOrder)}
        </ul>
        <div>
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
        </div>
      </div>
    )
  }
}

export default Cart;