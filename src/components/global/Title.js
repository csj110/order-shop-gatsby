import React from 'react';

export default function Title({title}) {
	return (
		<div className="row">
			<div className="col mb-3 text-center">
        <h1 className="text-capitalize font-weight-bold display-4">
          {title}
        </h1>
			</div>
		</div>
	);
}
