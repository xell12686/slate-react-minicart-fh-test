import React from 'react';
import CartLineItem from '../components/CartLineItem';
import CloseIcon from '../images/close.png';

import './MiniCart.scss';

const MiniCart = (props) => {
	const { checkout, clearCart, toggleCart } = props;
	return(
		<div className="modal-wrap">
			<div className="MiniCart">
				{checkout.lineItems ? (
					<div className="wrap">
						<div className="header">
							<h3>Cart</h3>
							<button onClick={ toggleCart } className="close-button">
								<img src={CloseIcon} alt="close" />
							</button>
						</div>
						<div className="items">
							{checkout.lineItems.edges.map((item, index) => (
								<CartLineItem item={item.node} key={`line-item-${index}`} />
							))}
						</div>
						<div className="order-note">
							<textarea placeholder="Eg. Thank you"></textarea>
						</div>
						<div className="sub-total">
							<span>Subtotal</span>
							<span>$1,390</span>
						</div>
						<div className="shipping-note">
							<p>Shipping, taxes, and discounts codes calculated at checkout.</p>
						</div>
						<div className="cart-actions">
							<a href={checkout.webUrl}>Checkout</a>
							{/* <button onClick={ clearCart }>Clear Cart</button> */}
						</div>
					</div>
				) : (
					<div>Loading...</div>
				)}
			</div>
		</div>
	)
}	

export default MiniCart;