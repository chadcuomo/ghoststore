import React from 'react';
import { formatPrice } from '../helpers'

class LargeProduct extends React.Component {
  render() {
    // const { image, name, price, status } = this.props.details;
    return (
     <div className="large-product-container">
       <div className="large-product-inner">
         <div className="large-product-image-container">
          <img src="/images/pw-br.png" 
          alt="pw-br" 
          className="large-prod-img" />
         </div>
         <div className="large-product-info">
           <div className="large-product-title">
             <h4>LEGEND X BUBBLICIOUS</h4>
           </div>
           <div className="large-product-desc">
             <p className="description">We teamed up with the best (again) to deliver an authentic AF bubblegum pre-workout EXPERIENCE!</p>
           </div>
           <div className="large-addcart">
            <button className="add-cart">Add To Cart</button>
           </div>
         </div>
         <div className="large-product-close-container">
           <div className="close-button-container">
            <button className="close add-cart">Close</button>
           </div>
         </div>
       </div>
     </div>
    )
  }
}

export default LargeProduct;