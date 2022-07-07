import React from "react";
import Slider from "react-slick";

export const Toomuch = () => {
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
				src="https://res.cloudinary.com/elizapardo/image/upload/v1656246318/Editorial/logos_revistas_web_fymauj.webp"
				alt="Toomuch logo"
			/>
			<p className="font-Mukta text-base text-center my-6">
				Revista enfocada en tendencias, glamour, estilo y elegancia.
			</p>
			<div className="grid grid-cols-1">
				<div className=" px-auto">
					<Slider {...settings}>
						<div className="w-80 mx-auto">
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656779387/Editorial/Toomuch/TOO_MUCHO__01_mowjgv.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656779387/Editorial/Toomuch/TOO_MUCHO__03_rkqeed.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656779387/Editorial/Toomuch/TOO_MUCHO__04_nvtkf6.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656779387/Editorial/Toomuch/TOO_MUCHO__05_yycfwr.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656779387/Editorial/Toomuch/TOO_MUCHO__06_q7hcxc.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656779387/Editorial/Toomuch/TOO_MUCHO__07_rsy6wv.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656779388/Editorial/Toomuch/TOO_MUCHO__08_v6zlli.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656779388/Editorial/Toomuch/TOO_MUCHO__09_ljcemy.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656779388/Editorial/Toomuch/TOO_MUCHO__10_mil3mo.webp"
								alt="Imagen de toomuch"
							/>
						</div>
					</Slider>
				</div>
				<div className="lg:col-span-4 justify-self-center mt-20 mb-10">

					<a className="font-Mukta text-sm text-center mb-6 text-Purple-light" href="https://www.behance.net/gallery/36309515/TOO-MUCH" alt="Perfil de Behance">
						Haz click aquí para ver este trabajo en Behance
					</a>
				</div>
			</div>
		</div>
	);
};
