import React from 'react';
import { formatPrice } from '../helpers'

class SmallProduct extends React.Component {
  render() {
    const { image, name, price, status } = this.props.details;
    const isAvailable = status === 'available';
    return (
      <div className="small-product-outer">
        <div className="small-product-inner">
          <div className="small-img-container">
            <img src={image} alt={name} className="small-prod-img" />
          </div>
          <div>
            <hr />
          </div>
          <div className="product-info">
            <div className="small-prod-title">
              <h3>{name}</h3>
            </div>
            <div className="sub-info">
              <p className="small-prod-subtitle">Pre-Workout</p>
              <p className="small-price">{formatPrice(price)}</p>
            </div>
            <div className="small-btn-container">
              <button className="add-cart"
              disabled={!isAvailable}
              onClick={() => this.props.addToOrder(this.props.index)}>
                {isAvailable ? 'Add To Cart' : 'Sold Out'}
              </button>
              <button className="details"
              onClick={() =>this.props.openModal(this.props.index) }>Details</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SmallProduct;