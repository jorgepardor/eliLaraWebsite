import React from "react";

export const EdicionVideo = () => {
	return (
		<div className="container mt-24 flex flex-col h-screen">

			<p className="font-Mukta text-base text-center my-6">
				Parte de mi trabajo en el departamento de Marketing de Gato Studio consistía en realizar la edición de vídeos <br />que eran utilizados en las publicaciones del devlog de The Waylanders.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-6 flex-grow">
				<a href="https://www.youtube.com/watch?v=zh-RZzJl_J0" className="lg:col-span-3 p-2" target="_blank" rel="noreferrer">
					<img
						className="drop-shadow mx-auto"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656845112/Video/web_video_01_qcrf3a.webp"
						alt="Imagen de variedades"
					/>
				</a>
				<a href="https://www.youtube.com/watch?v=-rxiuLQouDE" className="lg:col-span-3" target="_blank" rel="noreferrer">
					<img
						className="drop-shadow mx-auto p-2"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656845112/Video/web_video_03_b6vgtv.webp"
						alt="Imagen de variedades"
					/>
				</a>
				<a href="https://www.youtube.com/watch?v=Z6Gb3f4CqZ8" className="lg:col-span-3" target="_blank" rel="noreferrer">
					<img
						className="drop-shadow mx-auto p-2"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656845112/Video/web_video_04_s9f1mc.webp"
						alt="Imagen de variedades"
					/>
				</a>
				<a href="https://www.youtube.com/watch?v=V3OcLK7bVKA" className="lg:col-span-3" target="_blank" rel="noreferrer">
					<img
						className="drop-shadow mx-auto p-2"
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656845112/Video/web_video_02_ll7cxw.webp"
						alt="Imagen de variedades"
					/>
				</a>

				<p className="lg:col-span-6 font-Mukta text-sm text-Purple-light text-center my-2">
				Haz click en las imágenes para ver los vídeos en YouTube.
			</p>
			</div>
		</div>
	);
};
