import React from 'react';
import { getFunName } from '../helpers';

class StoreFront extends React.Component {
  myInput = React.createRef();
    goToStore = (e) => {
         e.preventDefault();
         // get text from input
         const storeName = this.myInput.current.value;
         // change page to /store/storetext 
         this.props.history.push(`/store/${storeName}`)
    };
  render() {
    return (
      <div className="storefront">
        <div>
          <img src="/images/logo.png" alt="Ghost" className="mainghost" />
        </div>
        <form className="storefrontform"  onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input className="storename"
          type="text"
          ref={this.myInput}
          required placeholder="Store Name"
          defaultValue={getFunName()} />
          <button  className="visitstore" type="submit">Visit Store</button>
        </form>
      </div>
    );
  }
}

export default StoreFront;