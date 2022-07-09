import React from "react";


export const Flowers = () => {

	return (
		<div className="container my-36">
			<p className="font-Mukta text-base text-center mt-6 mb-36">
				Inspirado en la primera primavera que viví en España. Me recuerda la calidez del hogar.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-12">
				<div className="lg:col-span-4">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657381857/Personal/flowers/notebook_myblvg.webp"
						alt="Imagen del proyecto de Flower Pattern"
					/>
				</div>
				<div className="lg:col-span-4">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657381856/Personal/flowers/flower_ipow8m.webp"
						alt="Imagen del proyecto de Flower Pattern"
					/>
				</div>
				<div className="lg:col-span-4">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657381857/Personal/flowers/pattern_yhaw6d.webp"
						alt="Imagen del proyecto de Flower Pattern"
					/>
				</div>
			</div>
		</div>
	);
};
