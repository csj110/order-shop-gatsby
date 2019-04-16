import React from 'react';
import { Link } from 'gatsby';
import Title from '../global/Title'
export default function Info() {
	return (
		<section className="py-5">
      <div className="container">
        <Title title='our story'></Title>
				<div className="row">
					<div className="col-10 col-sm-8 mx-auto text-center">
						<p className="leader text-muted mb-5">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis perspiciatis, quod asperiores aut nam obcaecati molestias porro eos. Placeat labore accusamus laudantium cumque eum necessitatibus doloribus ducimus consectetur eligendi nesciunt culpa quam, minima, aperiam exercitationem sapiente blanditiis facere sunt mollitia eos quos earum doloremque? Soluta ut blanditiis quibusdam ipsum delectus.
            </p>
            <Link to='/about'>
              <button className="btn btn-yellow text-uppercase">
              about page
              </button>
            </Link>
					</div>
				</div>
			</div>
		</section>
	);
}
