import React from 'react';

const CartLineItem = (props) => {
	const { title, image, price } = props.item.variant
	const { quantity } = props.item

	return(
		<div className="cart-line-item">
			<table>
				<tbody>
					<tr>
						<td className="img-wrap" rowSpan="2">
							<img src={image.transformedSrc} alt="product" />
						</td>
						<td>
							<span className="poduct-name">{props.item.title}</span>
							<span className="variant-name">{title}</span>
						</td>
					</tr>
					<tr>
						<td className="qty-wrap">
							<span className="qty-box">{quantity}</span>
						</td>
						<td  className="price-wrap">
							<span className="price">${price * quantity}</span>
						</td>
					</tr>

				</tbody>
			</table>
		</div>
	)
}

export default CartLineItem;