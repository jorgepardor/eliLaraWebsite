import React from "react";


export const CustomType = () => {

	return (
		<div className="container my-36">
			<img
				className="mx-auto w-4/6 md:w-2/6"
				src="https://res.cloudinary.com/elizapardo/image/upload/v1656702882/Personal/customtype_jam9xk.webp"
				alt="Customizing logo"
			/>
			<p className="font-Mukta text-base text-center mt-6 mb-36">
				Éste es el resultado de un curso de creación de un logotipo de marca<br /> a partir de la personalización de una fuente tipográfica, dictado por Aaron Draplin.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-6">
				<div className="lg:col-span-6">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656708732/Personal/logo_portada_coruna_kit0yv.webp"
						alt="Imagen del proyecto de Custom type"
					/>
				</div>
				<div className="lg:col-span-3">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656708732/Personal/imprension_acoruna_02_gze3yr.webp"
						alt="Imagen del proyecto de Custom type"
					/>
				</div>
				<div className="lg:col-span-3">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656708732/Personal/camiseta_02_ramyiz.webp"
						alt="Imagen del proyecto de Custom type"
					/>
				</div>
				{/* <div className="lg:col-span-6 justify-self-center mt-20 mb-10">

					<a className="font-Mukta text-sm text-center mb-6 text-Purple-light" href="https://www.behance.net/gallery/29772267/Diagramacion-de-la-revista-Playboy-Venezuela" alt="Perfil de Behance">
						Haz click aquí para ver este trabajo en Behance
					</a>
				</div> */}
			</div>
		</div>
	);
};
