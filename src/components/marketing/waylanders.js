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
				className="mx-auto  w-2/6"
				src="https://res.cloudinary.com/elizapardo/image/upload/v1656699083/Marketing/waylanders_byenfr.webp"
				alt="Waylanders logo"
			/>
			<p className="font-Mukta text-base text-center mt-6 mb-24">
				Trabajé en Gato Studio durante el desarollo de The Waylanders, un videojuego de RPG inspirado en la época Celta. <br /> Fui parte del departamento de marketing, en el cual tenía múltiples responsabilidades, como la realización de <span className="font-Mukta text-base text-Yellow-custom"><a href="/video">vídeos</a></span>, el diseño y maquetación de la página web, <br />como también el diseño de recursos gráficos para las publicaciones del desarrollo.
			</p>
			<div className="grid grid-cols-1">
				<div className=" px-auto">
					<Slider {...settings}>
						<div className="w-80 mx-auto">
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656353725/Marketing/waylanders/POSE_BRIGG_gxdty1.webp"
								alt="Imagen de Waylanders"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656353726/Marketing/waylanders/POSE_DELBA_RRSS_kp2q0t.webp"
								alt="Imagen de Waylanders"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656353725/Marketing/waylanders/REA_RRSS_sgapkt.webp"
								alt="Imagen de Waylanders"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656353725/Marketing/waylanders/NAZHEDJA_RRSS_anfvje.webp"
								alt="Imagen de Waylanders"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656353725/Marketing/waylanders/TIANA_TABERNA2_RRSS_onjxyh.webp"
								alt="Imagen de Waylanders"
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
						alt="Imagen de Waylanders"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656354265/Marketing/waylanders/web_waylanders_02_v4ckki.webp"
						alt="Imagen de Waylanders"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656354395/Marketing/waylanders/web_waylanders_03_smiqou.webp"
						alt="Imagen de Waylanders"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656354487/Marketing/waylanders/web_waylanders_04_pznn03.webp"
						alt="Imagen de Waylanders"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656354555/Marketing/waylanders/web_waylanders_05_ja7mrk.webp"
						alt="Imagen de Waylanders"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656354609/Marketing/waylanders/web_waylanders_06_ftiguk.webp"
						alt="Imagen de Waylanders"
					/>
				</div>
				<div className="lg:col-span-4 justify-self-center mb-2">
					<img
						className="drop-shadow mx-auto "
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656354664/Marketing/waylanders/web_waylanders_07_zwtpti.webp"
						alt="Imagen de Waylanders"
					/>
				</div>
				{/* <div className="lg:col-span-4 justify-self-center mt-20 mb-10">

					<a href="https://res.cloudinary.com/elizapardo/image/upload/v1656699428/behance_aplgqv.webp"  alt="Perfil de Behance">
						<img
							className="w-56  mx-auto"
							src="https://res.cloudinary.com/elizapardo/image/upload/v1656699428/behance_aplgqv.webp"
							alt="Visita mi perfil en Behance"
						/>
						<p className="font-Mukta text-sm text-center mb-6">
							Para ver mas de mi trabajo en The Waylanders visita mi perfil de Behance
						</p>
					</a>
				</div> */}
			</div>
		</div>
	);
};
