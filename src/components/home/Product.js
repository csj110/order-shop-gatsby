import React from 'react';
import Title from '../global/Title';

export default function Product({ image_url, title, price,id }) {
	return (
		<div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
			<div className="card" style={{ minHeight: '100%' }}>
				<img src={image_url} alt="img" className="card-img-top card-img-height" />
				<div className="card-body text-center">
					<h6>{title}</h6>
					<h6>
						<strong>${price}</strong>
					</h6>
					<button
						className="btn btn-yellow text-capitalize mt-3 snipcart-add-item"
						data-item-id={id}
						data-item-name={title}
						data-item-price={price}
						data-item-image={image_url}
						data-item-url='https://order.monte.xn--6qq986b3xl/'
					>
						add to cart
					</button>
				</div>
			</div>
		</div>
	);
}
