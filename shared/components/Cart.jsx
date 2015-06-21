"use strict";

var React = require('react');
var CartActions = require('../actions/CartActions');

var Cart = React.createClass({

	// Hide cart via Actions
	closeCart: function(){
		CartActions.toggleCart(false);
	},

	// Show cart via Actions
	openCart: function(){
		CartActions.toggleCart(true);
	},

	// Remove item from Cart via Actions
	removeFromCart: function(product){
		CartActions.removeFromCart(product);
		CartActions.toggleCart(false);
	},

	// Render cart view
	render: function() {
		var self = this, products = this.props.products;
		return (
			<div className={"flux-cart " + (this.props.visible ? 'active' : '')}>
			<div className="mini-cart">
				<button type="button" className="close-cart" onClick={this.closeCart}>×</button>
				<ul>
					{Object.keys(products).map(function(product){
						return (
						<li key={product}>
							<h1 className="name">{products[product].name}</h1>
							<p className="type">{products[product].type} x {products[product].quantity}</p>
							<p className="price">${(products[product].price * products[product].quantity).toFixed(2)}</p>
							<button type="button" className="remove-item" onClick={self.removeFromCart.bind(self, products[product])}>Remove</button>
						</li>
						);
					})}
				</ul>
				<span className="total">Total: ${this.props.total}</span>
			</div>
			<button type="button" className="view-cart" onClick={this.openCart} disabled={Object.keys(products).length > 0 ? "" : "disabled"}>View Cart ({this.props.count})</button>
			</div>
		);
	},
});

module.exports = Cart;