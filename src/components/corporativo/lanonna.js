import React from "react";

export const Nonna = () => {
	return (
		<div className="container mt-24">
			<img
				className="mx-auto corporativos-logo"
				src="https://res.cloudinary.com/elizapardo/image/upload/v1656258517/Corporativo/LaNonna/Logo_web_nonna_eg4x6j.webp"
				alt="Varidades logo"
			/>

			<p className="font-Epilogue text-base xl:text-xl text-center mt-6 mb-24">
				Proyecto de una cafetería y pastelería italiana. Diseño de imagen
				corporativa y creación de identidad gráfica. <br />Inspirada en los años 70`s y 
				tomando como referencia el estilo de Aaron James Draplin.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-4">
				<div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656257045/Corporativo/LaNonna/Tek-a-way_nonna_e9fxof.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-2 gap-2 object-cover hover:object-fill md:mr-2 my-2">
					<img
						className="drop-shadow mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656344102/Corporativo/LaNonna/vaso-cafe_nonna_01_txymjc.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-2 gap-2 md:ml-2 my-2">
					<img
						className="drop-shadow mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656257045/Corporativo/LaNonna/Caja_nonna_tartas_05_dhia66.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="md:col-span-4 justify-self-center my-2">
					<img
						className="drop-shadow object-scale-down"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656257047/Corporativo/LaNonna/ejemplo-de-uso-de-logo_wqvb6v.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-2 gap-2 lg:pr-2 my-2">
					<img
						className="drop-shadow"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656257045/Corporativo/LaNonna/Galleta_nonna_nbuio8.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-2 gap-2 lg:pl-2 my-2">
					<img
						className="drop-shadow"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656257045/Corporativo/LaNonna/Cruasanes_nonna_01_rwlkmf.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="md:col-span-4 justify-self-center my-2">
					<img
						className="drop-shadow"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656257045/Corporativo/LaNonna/logo_local_nonna_lxxfux.webp"
						alt="Imagen de variedades"
					/>
				</div>
			</div>
		</div>
	);
};
