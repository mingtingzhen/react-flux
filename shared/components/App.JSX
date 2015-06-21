"use strict";

var React = require('react'),
	CartStore = require('../stores/CartStore'),
	ProductStore = require('../stores/ProductStore'),
	ProductActions = require('../actions/ProductActions'),
	Product = require('./Product.jsx'),
	Cart = require('./Cart.jsx');

// private methods
function _getCartState() {
	return {
		products: ProductStore.getProducts(),
		selectedProduct: ProductStore.getSelected(),
		cartItems: CartStore.getCartProducts(),
		cartCount: CartStore.getCount(),
		cartTotal: CartStore.getTotalCost(),
		cartVisible: CartStore.getCartVisible()
	};
}

module.exports = React.createClass({

	// Set the initial component state
	getInitialState: function(){
		var products = this.props.products || [];
		ProductActions.loadProduct(products);

		return _getCartState();
	},

	componentWillReceiveProps: function(newProps, oldProps){
		// only called when component receives updated properties 
		// by its parent (not called before initial rendering)
		this.setState(this.getInitialState(newProps));
	},

	componentDidMount: function() {
		ProductStore.addChangeListener(this.updateState);
		CartStore.addChangeListener(this.updateState);
	},

	componentWillUnmount: function() {
		ProductStore.removeChangeListener(this.updateState);
		CartStore.removeChangeListener(this.updateState);
	},

	updateState: function(){
		this.setState(_getCartState());
	},

	// Render the component
	render: function(){
		return (
			<div className="main-app">
				new app
				<Product products={this.state.products} 
						product={this.state.selectedProduct} 
						cartItems={this.state.cartItems} />
				<Cart products={this.state.cartItems} 
						count={this.state.cartCount} 
						total={this.state.cartTotal} 
						visible={this.state.cartVisible} />
			</div>
		);
	}
});