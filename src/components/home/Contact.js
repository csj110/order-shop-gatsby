import React from 'react';
import Title from '../global/Title';
export default function Contact() {
	return (
		<section className="contact py-5">
			<Title title="contact us" />
			<div className="row">
				<div className="col-10 mx-auto col-sm-8 col-md-6">
					<form action="https://formspree.io/1666081734@qq.com" method="POST">
						<div className="from-group">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="name"
								id="name"
								className="form-control"
								placeholder="John Michael"
							/>
						</div>
						<div className="from-group">
							<label htmlFor="email">Email</label>
							<input
								type="text"
								name="email"
								id="email"
								className="form-control"
								placeholder="email@email.com"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="description">Description</label>
							<textarea
								name="description"
								id="description"
								className="form-control"
								rows="5"
								placeholder="descriptions here ...."
							/>
            </div>
            <button type='submit' className="btn btn-yellow btn-block text-capitalize mt-4">submit</button>
					</form>
				</div>
			</div>
		</section>
	);
}
