import React from "react";
import Slider from "react-slick";

export const Playboy = () => {
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
		<div className="container mt-36 ">
			<img
				className="mx-auto w-2/6"
				src="https://res.cloudinary.com/elizapardo/image/upload/v1656342601/Editorial/Playboylogo_dro56e.webp"
				alt="Varidades logo"
			/>
			<p className="font-Mukta text-base text-center my-6">
				Revista de entretenimiento para adultos. Se publica mensualmente y
				ofrece artículos sobre temas de interés y entrevistas a personas
				destacadas.
			</p>
			<div className="grid grid-cols-1 mb-20">
				<div className=" px-auto">
					<Slider {...settings}>
						<div className="w-80 mx-auto">
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245324/Editorial/Playboy/PB_01_WEB_hpoky6.webp"
								alt="Imagen de playboy"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245258/Editorial/Playboy/PB_02_WEB_bb4ovs.webp"
								alt="Imagen de playboy"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245258/Editorial/Playboy/PB_03_WEB_xhcnb7.webp"
								alt="Imagen de playboy"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245258/Editorial/Playboy/PB_04_WEB_rizqmj.webp"
								alt="Imagen de playboy"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245258/Editorial/Playboy/PB_05_WEB_vdpksk.webp"
								alt="Imagen de playboy"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245258/Editorial/Playboy/PB_06_WEB_mraqxk.webp"
								alt="Imagen de playboy"
							/>
						</div>
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245258/Editorial/Playboy/PB_07_WEB_f7bxg3.webp"
								alt="Imagen de playboy"
							/>
						</div>
						{/* <div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245258/Editorial/Playboy/PB_08_WEB_nb2zqn.webp"
								alt="Imagen de playboy"
							/>
						</div> */}
						<div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245258/Editorial/Playboy/PB_09_WEB_msnqkh.webp"
								alt="Imagen de playboy"
							/>
						</div>
                        <div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245258/Editorial/Playboy/PB_10_WEB_oqlny9.webp"
								alt="Imagen de playboy"
							/>
						</div>
                        <div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245258/Editorial/Playboy/PB_11_WEB_ocr6tl.webp"
								alt="Imagen de playboy"
							/>
						</div>
                        <div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245259/Editorial/Playboy/PB_12_WEB_nlvjpo.webp"
								alt="Imagen de playboy"
							/>
						</div>
                        <div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245259/Editorial/Playboy/PB_13_WEB_qbyjaj.webp"
								alt="Imagen de playboy"
							/>
						</div>
                        <div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245257/Editorial/Playboy/PB_14_WEB_eeqznx.webp"
								alt="Imagen de playboy"
							/>
						</div>
                        <div>
							<img
								className="mx-auto"
								src="https://res.cloudinary.com/elizapardo/image/upload/v1656245258/Editorial/Playboy/PB_15_WEB_vkfnx3.webp"
								alt="Imagen de playboy"
							/>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};
