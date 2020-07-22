import React from 'react';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';


class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory-container">
        <div>
          <button>></button>
        </div>
        <h2>Inventory</h2> 
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