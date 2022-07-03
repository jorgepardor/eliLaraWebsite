import React from "react";

export const Nonna = () => {
	return (
		<div className="container mt-24">
			<img
				className="mx-auto corporativos-logo w-1/4"
				src="https://res.cloudinary.com/elizapardo/image/upload/v1656258517/Corporativo/LaNonna/Logo_web_nonna_eg4x6j.webp"
				alt="Varidades logo"
			/>

			<p className="font-Mukta text-base text-center mt-6 mb-24">
				Proyecto de una cafetería y pastelería italiana. Diseño de imagen
				corporativa y creación de identidad gráfica. <br />Inspirada en los años 70`s y
				tomando como referencia el estilo de Aaron James Draplin.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-6">
				<div className="lg:col-span-4 justify-self-center">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656257045/Corporativo/LaNonna/Tek-a-way_nonna_e9fxof.webp"
						alt="Imagen de Bizcochos La Nonna"
					/>
				</div>
				<div className="lg:col-span-2">
					<img
						className="drop-shadow mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656344102/Corporativo/LaNonna/vaso-cafe_nonna_01_txymjc.webp"
						alt="Imagen de Bizcochos La Nonna"
					/>

					<img
						className="drop-shadow mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656257045/Corporativo/LaNonna/Caja_nonna_tartas_05_dhia66.webp"
						alt="Imagen de Bizcochos La Nonna"
					/>
				</div>
				<div className="lg:col-span-3">
					<img
						className="drop-shadow mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656257045/Corporativo/LaNonna/Galleta_nonna_nbuio8.webp"
						alt="Imagen de Bizcochos La Nonna"
					/>
				</div>
				<div className="lg:col-span-3">
					<img
						className="drop-shadow mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656257045/Corporativo/LaNonna/Cruasanes_nonna_01_rwlkmf.webp"
						alt="Imagen de Bizcochos La Nonna"
					/>
				</div>
				<div className="lg:col-span-6 justify-self-center mt-20 mb-10">

					<a className="font-Mukta text-sm text-center mb-6 text-Purple-light" href="https://www.behance.net/gallery/19198439/Bizcochos-La-Nonna" alt="Perfil de Behance">
						Haz click aquí para ver este trabajo en Behance
					</a>
				</div>
			</div>
		</div>
	);
};


