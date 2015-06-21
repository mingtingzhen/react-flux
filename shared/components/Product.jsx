"use strict";

var React = require('react'),
	ProductActions = require('../actions/ProductActions'),
	CartActions = require('../actions/CartActions');


var Product = React.createClass({
	addToCart: function() {
		CartActions.addToCart(this.props.product);
		CartActions.toggleCart(true);
	},

	selectProduct: function(event) {
		var index = event.target.value || 0;
		ProductActions.selectProduct(index);
	},

	render: function() {
		var products = this.props.products,
			product = this.props.product,
			carItems = this.props.cartItems,
			remainingCount = carItems[product.sku] ? product.inventory - carItems[product.sku].quantity : product.inventory;

		return (
			<div className="product">
				<img src={product.image}/>
				<div className="product-detail">
					<h1 className="name">{product.name}</h1>
					<p className="description">{product.description}</p>
					<p className="price">{product.price}</p>
					<select onChange={this.selectProduct}>
						{products.map(function(prod, index){
							return (
								<option key={index} value={index}>{prod.name}</option>
								);
							})
						}
					</select>
					<button type="button" onClick={this.addToCart} disabled={remainingCount ? '' : 'disabled'}>
						{remainingCount ? 'Add to Cart' : 'Sold out'}
					</button>
				</div>
			</div> 
		);
	}
});

module.exports = Product;