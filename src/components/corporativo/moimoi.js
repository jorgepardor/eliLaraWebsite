import React from "react";

export const Moimoi = () => {
	return (
		<div className="container mt-36">
			<img
				className="mx-auto "
				src="https://res.cloudinary.com/elizapardo/image/upload/v1656258745/Corporativo/MoiMoi/Log_moimoi_web_jzssv3.webp"
				alt="Varidades logo"
			/>

			<p className="font-Epilogue text-base xl:text-xl text-center mt-6 mb-24">
				Empresa que se dedica a la venta al por menor de cosméticos Cruelty
				Free.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-4">
				<div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="..."
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656258745/Corporativo/MoiMoi/moimoi_web_bavj3x.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-2 gap-2 lg:mr-2 my-2">
					<img
						className="drop-shadow mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656258745/Corporativo/MoiMoi/pegatinas_web_moimoi_upcxlm.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-2 gap-2 lg:ml-2 my-2">
					<img
						className="drop-shadow mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656258745/Corporativo/MoiMoi/caja_web_moimoi_vnz5pa.webp"
						alt="Imagen de variedades"
					/>
				</div>
			</div>
		</div>
	);
};
