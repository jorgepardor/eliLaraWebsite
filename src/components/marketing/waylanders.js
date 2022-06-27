import React from "react";
import Slider from "react-slick";


export const Waylanders = () => {
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
				src="https://res.cloudinary.com/elizapardo/image/upload/v1655668556/Editorial/VariedadesLogo_lya7fn.webp"
				alt="Varidades logo"
			/>
			<p className="font-Ikra text-center my-6">
				Variedades es la primera revista femenina de Venezuela. Con un tiraje
				mensual, se dedica a satisfacer las inquietudes de la mujer actual.
			</p>
			<div className="grid grid-cols-1">
				<div className=" px-auto">
					<Slider {...settings}>
						<div className="w-80 mx-auto">
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656353725/Marketing/waylanders/POSE_BRIGG_gxdty1.webp"
								alt="Imagen de variedades"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656353726/Marketing/waylanders/POSE_DELBA_RRSS_kp2q0t.webp"
								alt="Imagen de variedades"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656353725/Marketing/waylanders/REA_RRSS_sgapkt.webp"
								alt="Imagen de variedades"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656353725/Marketing/waylanders/NAZHEDJA_RRSS_anfvje.webp"
								alt="Imagen de variedades"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656353725/Marketing/waylanders/TIANA_TABERNA2_RRSS_onjxyh.webp"
								alt="Imagen de variedades"
							/>
						</div>
					</Slider>
				</div>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-4">
				<div className="lg:col-span-4 justify-self-center mt-24 mb-2">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656354116/Marketing/waylanders/web_waylanders_01_jtzxwy.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656354265/Marketing/waylanders/web_waylanders_02_v4ckki.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656354395/Marketing/waylanders/web_waylanders_03_smiqou.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656354487/Marketing/waylanders/web_waylanders_04_pznn03.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656354555/Marketing/waylanders/web_waylanders_05_ja7mrk.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656354609/Marketing/waylanders/web_waylanders_06_ftiguk.webp"
						alt="Imagen de variedades"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656354664/Marketing/waylanders/web_waylanders_07_zwtpti.webp"
						alt="Imagen de variedades"
					/>
				</div>



				
			</div>
		</div>
	);
};
