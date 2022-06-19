import React from "react";

export const Variedades = () => {
	return (
		
        <div className="container mt-36">
			<img
				className="mx-auto"
				src="https://res.cloudinary.com/elizapardo/image/upload/v1655668556/Editorial/VariedadesLogo_lya7fn.webp"
				alt="Varidades logo"
			/>

			<p className="font-Ikra text-center my-6">
				Variedades es la primera revista femenina de Venezuela. Con un tiraje
				mensual, se dedica a satisfacer las inquietudes de la mujer actual.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-4">
				<div className="lg:col-span-4 justify-self-center">
					<img
						className="drop-shadow"
						src="https://res.cloudinary.com/elilara/image/upload/v1652031724/VARIEDADES_01_hyjie1.jpg"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-2 gap-2">
					<img
						className="drop-shadow"
						src="https://res.cloudinary.com/elilara/image/upload/v1652031724/VARIEDADES_02_e7lg3x.jpg"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-2 gap-2">
					<img
						className="drop-shadow"
						src="https://res.cloudinary.com/elilara/image/upload/v1652031724/VARIEDADES_03_zqvwgv.jpg"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="md:col-span-4 justify-self-center">
					<img
						className="drop-shadow"
						src="https://res.cloudinary.com/elilara/image/upload/v1652031725/VARIEDADES_05_rpriny.jpg"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-2 gap-2">
					<img
						className="drop-shadow"
						src="https://res.cloudinary.com/elilara/image/upload/v1652031724/VARIEDADES_06_jfp9lg.jpg"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-2 gap-2">
					<img
						className="drop-shadow"
						src="https://res.cloudinary.com/elilara/image/upload/v1652031725/VARIEDADES_07_y9rzqh.png"
						alt="Imagen de variedades"
					/>
				</div>
				{/* <img
					className="drop-shadow"
					src="https://res.cloudinary.com/elilara/image/upload/v1652031724/VARIEDADES_08_odivqm.png"
					alt="Imagen de variedades"
				/> */}
			</div>
		</div>
	);
};
