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
				className="mx-auto"
				src="https://res.cloudinary.com/elizapardo/image/upload/v1656246318/Editorial/logos_revistas_web_fymauj.webp"
				alt="Toomuch logo"
			/>
			<p className="font-Ikra text-center my-6">
				Revista enfocada en tendencias, glamour, estilo y elegancia.
			</p>
			<div className="grid grid-cols-1">
				<div className=" px-auto">
					<Slider {...settings}>
						<div className="w-80 mx-auto">
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656244320/Editorial/Toomuch/TM_01_WEB_taj6ay.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656244320/Editorial/Toomuch/TM_02_WEB_ar2rmb.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656244320/Editorial/Toomuch/TM_03_WEB_zjjavn.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656244320/Editorial/Toomuch/TM_04_WEB_mvuxur.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656244320/Editorial/Toomuch/TM_05_WEB_hoenrc.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656244320/Editorial/Toomuch/TM_06_WEB_p2pdmt.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656244320/Editorial/Toomuch/TM_07_WEB_fjkbju.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656244321/Editorial/Toomuch/TM_08_WEB_rxk7me.webp"
								alt="Imagen de toomuch"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656244320/Editorial/Toomuch/TM_09_WEB_f2pu6k.webp"
								alt="Imagen de toomuch"
							/>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};
