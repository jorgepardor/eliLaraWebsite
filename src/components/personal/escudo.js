import React from "react";


export const Escudo = () => {

	return (
		<div className="container my-36">
			<img
				className="mx-auto w-4/6 md:w-2/6"
				src="https://res.cloudinary.com/elizapardo/image/upload/v1657382257/Personal/Escudo/logo_familia_limpio_yzkcj9.webp"
				alt="Customizing logo"
			/>
			<p className="font-Mukta text-base text-center mt-6 mb-36">
				Traté de plasmar la esencia de nuestra familia manera gráfica en un logo. Basado en las costumbres que nos identifican y caracterizan.			
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-6">
				<div className="lg:col-span-3">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657382257/Personal/Escudo/membrete_sp2uf1.webp"
						alt="Imagen del proyecto de Escudo familiar"
					/>
				</div>
				<div className="lg:col-span-3">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1657382258/Personal/Escudo/repujado_xqyfbf.webp"
						alt="Imagen del proyecto de Escudo familiar"
					/>
				</div>
			</div>
		</div>
	);
};
