import React from "react";

export const Manchas = () => {
	return (
		<div className="container mt-36">
			<img
				className="mx-auto"
				src="https://res.cloudinary.com/elizapardo/image/upload/v1657317211/Corporativo/Manchas%20y%20Chocolate/Manchas_y_Chocolate_01_fswgle.webp"
				alt="Varidades logo"
			/>

			<p className="font-Mukta text-base text-center mt-6 mb-24">
				Manchas y Chocolate es una organización sin fines de lucro que tiene como objetivo rescatar a los animales domésticos <br />que se encuentran en situación de abandono. Brindándoles atención médica y preparándolos para ser puestos en adopción.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-4">
				<div className="lg:col-span-4 justify-self-center mb-24">
					<img
						className="mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657317211/Corporativo/Manchas%20y%20Chocolate/Manchas_y_Chocolate_02_obgrbf.webp"
						alt="Imagen de Manchas y Chocolate"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mb-24">
					<img
						className="mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657317211/Corporativo/Manchas%20y%20Chocolate/Manchas_y_Chocolate_03_je8s2y.webp"
						alt="Imagen de Manchas y Chocolate"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mb-24">
					<img
						className="drop-shadow mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657317211/Corporativo/Manchas%20y%20Chocolate/Manchas_y_Chocolate_04_h5ioz8.webp"
						alt="Imagen de Manchas y Chocolate"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mt-10 mb-5">

					<a className="font-Mukta text-sm text-center mb-6 text-Purple-light" href="https://www.behance.net/gallery/24207063/Fundacion-Manchas-y-Chocolatey" alt="Perfil de Behance">
						Haz click aquí para ver este trabajo en Behance
					</a>
				</div>
		
			</div>
			<hr className=" mt-10 bg-Purple-light h-0.5 "   />
		</div>
	);
};
