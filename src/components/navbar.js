import React, { useState } from "react";

export const Navbar = () => {

	// const [menuToggle, setMenuToggle] = useState(false);


	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-Purple-dark mb-3">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<img
						src="https://res.cloudinary.com/elizapardo/video/upload/v1657474724/MainVideoV2.mp4"
						className="mr-3 h-9"
						alt="Elizabeth Lara"
					/>
						<button
							className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<span className="font-Mukta text-2xl">☰</span>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}
						id="example-navbar-danger"
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-xs leading-snug text-white hover:opacity-75"
									href="/editorial"
								>
									<span className="font-Mukta text-sm">Diseño Editorial</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-xs leading-snug text-white hover:opacity-75"
									href="/corporativo"
								>
									<span className="font-Mukta text-sm">Imagen Corporativa</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-xs leading-snug text-white hover:opacity-75"
									href="/marketing"
								>
									<span className="font-Mukta text-sm">Marketing</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-xs leading-snug text-white hover:opacity-75"
									href="/3d"
								>
									<span className="font-Mukta text-sm">Cinema 4D</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center text-xs leading-snug text-white hover:opacity-75"
									href="/video"
								>
									<span className="font-Mukta text-sm">Edición de Vídeo</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
