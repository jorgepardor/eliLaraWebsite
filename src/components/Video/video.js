import React from "react";

export const EdicionVideo = () => {
	return (
		<div className="container mt-24">
			{/* <img
				className="mx-auto corporativos-logo w-1/4"
				src="https://res.cloudinary.com/elizapardo/image/upload/v1656258517/Corporativo/LaNonna/Logo_web_nonna_eg4x6j.webp"
				alt="Varidades logo"
			/> */}

			<p className="font-Mukta text-base xl:text-xl text-center mt-6 mb-24">
				Muestra de edición de video, partel proyecto The Waylanders
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-6 mb-24">
				<a href="https://www.youtube.com/watch?v=zh-RZzJl_J0" className="lg:col-span-3 p-2">
					<img
						className="drop-shadow mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656845112/Video/web_video_01_qcrf3a.webp"
						alt="Imagen de variedades"
					/>
				</a>
				<a href="https://www.youtube.com/watch?v=-rxiuLQouDE" className="lg:col-span-3">
					<img
						className="drop-shadow mx-auto p-2"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656845112/Video/web_video_03_b6vgtv.webp"
						alt="Imagen de variedades"
					/>
				</a>
				<a href="https://www.youtube.com/watch?v=Z6Gb3f4CqZ8" className="lg:col-span-3">
					<img
						className="drop-shadow mx-auto p-2"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656845112/Video/web_video_04_s9f1mc.webp"
						alt="Imagen de variedades"
					/>
				</a>
				<a href="https://www.youtube.com/watch?v=V3OcLK7bVKA" className="lg:col-span-3">
					<img
						className="drop-shadow mx-auto p-2"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656845112/Video/web_video_02_ll7cxw.webp"
						alt="Imagen de variedades"
					/>
				</a>
			</div>
		</div>
	);
};
