import React from 'react';

class StoreFront extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src="/images/logo.png" alt="Ghost"/>
        </div>
        <form>
          <h2>Please Enter A Store</h2>
          <input type="text"
          required placeholder="Store Name" />
          <button type="submit">Visit Store</button>
        </form>
      </div>
    );
  }
}

export default StoreFront;