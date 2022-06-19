import React from "react";

export const Navbar = () => {
	return (
		// <div className="navbar bg-a-main-yellow">
		//     {/* Menú del modo para pantallas de móvil. */}
		//     <div className="navbar-start">
		//         <div className="dropdown">
		//             <label tabindex="0" className="btn btn-ghost lg:hidden">
		//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
		//             </label>
		//             <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
		//                 <li><a href="/">Home</a></li>
		//                 <li><a href="/editorial">Diseño Editorial</a></li>
		//                 <li><a href="/corporativo">Imagen Corporativa</a></li>
		//                 <li><a href="/marketing">Marketing</a></li>
		//                 <li><a href="/3d">Cinema 4D</a></li>
		//                 <li><a href="/personal">Proyectos Personales</a></li>
		//                 <li><a href="/video">Edición de Vídeo</a></li>
		//                 <li><a href="/contacto">Contacto</a></li>
		//             </ul>
		//         </div>
		//         {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
		//     </div>

		//     {/* Menú principal de la página */}
		//     <div className="navbar-center hidden lg:flex">
		//         <ul className="menu menu-horizontal p-0">
		//         <li><a className="text-a-main-dark hover:text-a-main-light" href="/">Home</a></li>
		//         <li><a className="text-a-main-dark hover:text-a-main-light" href="/editorial">Diseño Editorial</a></li>
		//         <li><a className="text-a-main-dark hover:text-a-main-light" href="/corporativo">Imagen Corporativa</a></li>
		//         <li><a className="text-a-main-dark hover:text-a-main-light" href="/marketing">Marketing</a></li>
		//         <li><a className="text-a-main-dark hover:text-a-main-light" href="/3d">Cinema 4D</a></li>
		//         <li><a className="text-a-main-dark hover:text-a-main-light" href="/personal">Proyectos Personales</a></li>
		//         <li><a className="text-a-main-dark hover:text-a-main-light" href="/video">Edición de Vídeo</a></li>
		//         <li><a className="text-a-main-dark hover:text-a-main-light" href="/contacto">Contacto</a></li>
		//         </ul>
		//     </div>
		//     <div className="navbar-end">
		//         {/* <a className="btn">Get started</a> */}
		//     </div>
		// </div>

		<div class=" bg-a-main-medium">
			<div class="navbar-start">
				<div class="dropdown">
					<label tabindex="0" class="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a>Item 1</a>
						</li>
						<li tabindex="0">
							<a class="justify-between">
								Parent
								<svg
									class="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
								</svg>
							</a>
							<ul class="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
				<a class="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal p-0">
					<li>
						<a>Item 1</a>
					</li>
					<li tabindex="0">
						<a>
							Parent
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
							>
								<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
							</svg>
						</a>
						<ul class="p-2">
							<li>
								<a>Submenu 1</a>
							</li>
							<li>
								<a>Submenu 2</a>
							</li>
						</ul>
					</li>
					<li>
						<a>Item 3</a>
					</li>
				</ul>
			</div>
			<div class="navbar-end">
				<a class="btn">Get started</a>
			</div>
		</div>
	);
};
