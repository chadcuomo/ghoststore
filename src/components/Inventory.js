import React from 'react';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';
import Login from './Login';
import base, { firebaseApp } from '../base';
import firebase from 'firebase';


class Inventory extends React.Component {

  state = {
    uid: null,
    owner: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.authHandler({ user });
      }
    })
  }

  authHandler = async (authData) => {
    const store = await base.fetch(this.props.storeId, { context: this });
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    })
  }
  
  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
    .auth()
    .signInWithPopup(authProvider)
    .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  }

  render() {
    const logout = <button className="logout-button" onClick={this.logout}>Log Out!</button>
    if(!this.state.uid) {
      return <Login authenticate={this.authenticate} />
    }
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you are not the owner!</p>
          {logout}
        </div>
      );
    }
    return (
      <div>
        <h2>Inventory</h2> 
        {logout}
        {Object.keys(this.props.products).map(key => 
          <EditProductForm 
          key={key} 
          index={key} 
          product={this.props.products[key]} 
          updateProduct={this.props.updateProduct}
          deleteProduct={this.props.deleteProduct} />)}
        <AddProductForm addProduct={this.props.addProduct}/>
      </div>
    );
  }
}

export default Inventory;