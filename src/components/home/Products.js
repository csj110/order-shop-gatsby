import React from 'react';
import Product from './Product';
import { data } from './data';
import Title from '../global/Title';
export default function Products() {
	const { recipes: products } = data;
	return (
		<section>
      <Title title="our products" />
      <div className='row'>
			{products.map((product) => <Product key={product.id} {...product} />)}
      </div>
		</section>
	);
}
