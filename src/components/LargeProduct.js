import React from 'react';
import { formatPrice } from '../helpers'

class LargeProduct extends React.Component {
  render() {
    const { image, name, price, status, desc } = this.props.details;
    const isAvailable = status === 'available';
    return (
     <div className="large-product-container">
       <div className="large-product-inner">
         <div className="large-product-image-container">
          <img src={image} 
          alt={name} 
          className="large-prod-img" />
         </div>
         <div className="large-product-info">
           <div className="large-product-title">
             <h4>{name}</h4>
           </div>
           <div className="large-product-desc">
             <p className="description">{desc}</p>
           </div>
           <div className="large-addcart">
            <div className="large-price">
              <h2>{formatPrice(price)}</h2>
            </div>
            <div className="large-add-button-div">
              <button className="add-cart"
              disabled={!isAvailable}
              onClick={() => this.props.addToOrder(this.props.index)}
              >
                {isAvailable ? 'Add To Cart' : 'Sold Out'}
              </button>
            </div>
          </div>
         </div>
         <div className="large-product-close-container">
           <div className="close-button-container">
            <button className="close add-cart"
            onClick={() =>this.props.closeModal(this.props.index) }>Close</button>
           </div>
         </div>
       </div>
     </div>
    )
  }
}

export default LargeProduct;