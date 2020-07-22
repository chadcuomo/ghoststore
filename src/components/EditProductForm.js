import React from 'react';


class EditProductForm extends React.Component {
  handleChange = (e) => {
    const updatedProduct = { 
      ...this.props.product,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateProduct(this.props.index, updatedProduct)
   }
   


  render() {
    return (
      <div className="product-edit">
        <input type="text" name="name" onChange={this.handleChange} value={this.props.product.name} />
        <input type="text" name="price" onChange={this.handleChange} value={this.props.product.price} />
        <select type="text" name="status" onChange={this.handleChange} value={this.props.product.status}>
          <option  value="available">Available!</option>
          <option  value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.product.desc} />
        <input type="text" name="image" onChange={this.handleChange} value={this.props.product.image} />
        <button className="visitstore" onClick={() => this.props.deleteProduct(this.props.index)}>Remove Product</button>
        </div>
    );
  }
}


export default EditProductForm;