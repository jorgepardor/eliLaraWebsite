import React from "react";
import Slider from "react-slick";


export const Variedades = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1500,
		autoplaySpeed: 3000,
		autoplay: true,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		pauseOnHover: true,
	};

	return (
		<div className="container mt-36">
			<img
				className="mx-auto w-4/6 md:w-2/6"
				src="https://res.cloudinary.com/elizapardo/image/upload/v1655668556/Editorial/VariedadesLogo_lya7fn.webp"
				alt="Varidades logo"
			/>
			<p className="font-Mukta text-base text-center my-6">
				Variedades es la primera revista femenina de Venezuela. Con un tiraje
				mensual, se dedica a satisfacer las inquietudes de la mujer actual.
			</p>
			<div className="grid grid-cols-1">
				<div className=" px-auto">
					<Slider {...settings}>
						<div className="w-80 mx-auto">
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656237433/Editorial/Variedades/VAR_01_WEB_w83fg1.webp"
								alt="Imagen de variedades"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656237433/Editorial/Variedades/VAR_02_WEB_ftwjjp.webp"
								alt="Imagen de variedades"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656237432/Editorial/Variedades/VAR_03_WEB_wa7h4b.webp"
								alt="Imagen de variedades"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656237432/Editorial/Variedades/VAR_04_WEB_daktns.webp"
								alt="Imagen de variedades"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656237432/Editorial/Variedades/VAR_05_WEB_daahab.webp"
								alt="Imagen de variedades"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656237432/Editorial/Variedades/VAR_06_WEB_yhqghb.webp"
								alt="Imagen de variedades"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656237432/Editorial/Variedades/VAR_07_WEB_woj21p.webp"
								alt="Imagen de variedades"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656237432/Editorial/Variedades/VAR_08_WEB_w6brwe.webp"
								alt="Imagen de variedades"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656237433/Editorial/Variedades/VAR_09_WEB_fnjwc2.webp"
								alt="Imagen de variedades"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656237433/Editorial/Variedades/VAR_10_WEB_lj0dkc.webp"
								alt="Imagen de variedades"
							/>
						</div>
					</Slider>
				</div>
				<div className="lg:col-span-4 justify-self-center mt-20 mb-10">

					<a className="font-Mukta text-sm text-center mb-6 text-Purple-light" href="https://www.behance.net/gallery/36000399/Revista-Variedades-%28Venezuela%29" alt="Perfil de Behance">
						Haz click aquí para ver este trabajo en Behance
					</a>
				</div>
			</div>
		</div>
	);
};