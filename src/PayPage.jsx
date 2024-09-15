import React from 'react' 

export default function PayPage() {

	return (
		<div className="container mx-auto">
			<form >
				<div className="card w-100 bg-base-100 bg-gray-200 shadow-2xl rounded-lg">
					<div className="card-body p-6">
						<h1 className="card-title font-bold text-2xl mb-4 justify-center">
							Complete your payment here!
						</h1>
						<div className="card-actions justify-center">
							<button
								className="btn btn-primary rounded-xl text-white px-4 py-2 mt-6"
							>
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

