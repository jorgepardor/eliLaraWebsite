import React from "react";

export const Savory = () => {
	return (
		<div className="container mt-36">
			<img
				className="mx-auto"
				src="https://res.cloudinary.com/elizapardo/image/upload/v1657384087/Corporativo/Savory/logo_sabory_web_mklizh.webp"
				alt="Varidades logo"
			/>

			<p className="font-Mukta text-base text-center mt-6 mb-24">
				Delicias Savory es una empresa que comercializa diferentes tipos de mezclas para elaboración de productos de repostería
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-4">

				<div className="lg:col-span-2 mb-16">
					<img
						className="mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657384087/Corporativo/Savory/etiquetas_savory_web1_rb5mtp.webp"
						alt="Imagen de Delicias Savory"
					/>
				</div>
				<div className="lg:col-span-2">
					<img
						className="mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657384087/Corporativo/Savory/etiquetas_savory_web2_lvlomj.webp"
						alt="Imagen de Delicias Savory"
					/>
				</div>
				<div className="lg:col-span-2 mb-24">
					<img
						className="mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657384092/Corporativo/Savory/empaque_deliciassavory_web_3_lo0yc8.webp"
						alt="Imagen de Delicias Savory"
					/>
				</div>
				<div className="lg:col-span-2">
					<img
						className="mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657384092/Corporativo/Savory/empaque_deliciassavory_web_2_dx5wep.webp"
						alt="Imagen de Delicias Savory"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mt-10 mb-10">

					<a className="font-Mukta text-sm text-center mb-6 text-Purple-light" href="https://www.behance.net/gallery/29050779/Delicias-Savory" alt="Perfil de Behance">
						Haz click aquí para ver este trabajo en Behance
					</a>
				</div>
			</div>
		</div>
	);
};
