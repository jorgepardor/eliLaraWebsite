import React from "react";


export const Monster = () => {

	return (
		<div className="container my-36">
			<p className="font-Mukta text-base text-center mt-6 mb-36">
				¿A quien no le gustan los monstruos? Son divertidos y te transportan a tu infancia, recordando todo lo que puedes llegar a lograr con imaginación y creatividad.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-6">
				<div className="lg:col-span-6">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657379977/Personal/monsters/monstermain_ps2lbn.webp"
						alt="Imagen del proyecto de Monsters"
					/>
				</div>
				<div className="lg:col-span-3">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657379977/Personal/monsters/monster2_gy3vic.webp"
						alt="Imagen del proyecto de Monsters"
					/>
				</div>
				<div className="lg:col-span-3">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657379977/Personal/monsters/monster1_jo19ol.webp"
						alt="Imagen del proyecto de Monsters"
					/>
				</div>
			</div>
		</div>
	);
};
