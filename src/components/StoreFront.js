import React from 'react';

class StoreFront extends React.Component {
  render() {
    return (
      <div className="storefront">
        <div>
          <img src="/images/logo.png" alt="Ghost" className="mainghost" />
        </div>
        <form className="storefrontform">
          <h2>Please Enter A Store</h2>
          <input className="storename"
          type="text"
          required placeholder="Store Name" />
          <button  className="visitstore" type="submit">Visit Store</button>
        </form>
      </div>
    );
  }
}

export default StoreFront;