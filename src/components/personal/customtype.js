import React from "react";


export const CustomType = () => {

	return (
		<div className="container mt-36">
			<img
				className="mx-auto"
				src="https://res.cloudinary.com/elizapardo/image/upload/v1656702882/Personal/customtype_jam9xk.webp"
				alt="Waylanders logo"
			/>
			<p className="font-Ikra text-center mt-6 mb-36">
				Custom Type de Aaron Draplin.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-6">
				<div className="lg:col-span-6">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656708732/Personal/logo_portada_coruna_kit0yv.webp"
						alt="Imagen de variedades"
					/>
				</div>
				{/* <div className="lg:col-span-2">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656708732/Personal/colores_acoruna_wzwhfy.webp"
						alt="Imagen de variedades"
					/>
				</div> */}
				<div className="lg:col-span-3">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656708732/Personal/imprension_acoruna_02_gze3yr.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-3">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656708732/Personal/camiseta_02_ramyiz.webp"
						alt="Imagen de variedades"
					/>
				</div>

				{/* <div className="lg:col-span-2 gap-2 lg:pl-2 my-2">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656708732/Personal/camiseta_01_ydqbuo.webp"
						alt="Imagen de variedades"
					/>
				</div> */}
				{/* <div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="drop-shadow mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656708732/Personal/bordado_ddxr8n.webp"
						alt="Imagen de variedades"
					/>
				</div> */}
				<div className="lg:col-span-4 justify-self-center mt-20 mb-10">

					<a href="https://res.cloudinary.com/elizapardo/image/upload/v1656699428/behance_aplgqv.webp" alt="Perfil de Behance">
						<img
							className="w-56  mx-auto"
							src="https://res.cloudinary.com/elizapardo/image/upload/v1656699428/behance_aplgqv.webp"
							alt="Visita mi perfil en Behance"
						/>
						<p className="font-Ikra text-center mb-6">
							Para ver mas de mi trabajo en The Waylanders visita mi perfil de Behance
						</p>
					</a>
				</div>
			</div>
		</div>
	);
};
