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
      <li key={key}>
        <span>
          {count} {product.name}
          {formatPrice(count * product.price)}
          <button onClick={() => this.props.deleteFromOrder(key)}>[x]</button>
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
        <h2>Cart</h2>
        <ul>
          {orderIds.map(this.renderOrder)}
        </ul>
        <div>
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
        <button onClick={() => this.props.closeCart()}>[x] close cart</button>
      </div>
    )
  }
}

export default Cart;