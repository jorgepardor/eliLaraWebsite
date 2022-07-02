import React from "react";

export const Footer = () => {
	return (
		<footer class="p-4 bg-Purple-dark shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
			<span class="text-sm text-Light-gray sm:text-center dark:text-gray-400">
				2022. All Rights Reserved.
			</span>
			<ul class="flex flex-wrap items-center mt-3 text-sm text-Light-gray dark:text-gray-400 sm:mt-0">
				<li>
					<a href="..." class="mr-4 hover:underline md:mr-6 ">
						Currículo
					</a>
				</li>
				<li>
					<a href="..." class="mr-4 hover:underline md:mr-6">
						Behance
					</a>
				</li>
				<li>
					<a href="..." class="mr-4 hover:underline md:mr-6">
						LinkedIn
					</a>
				</li>
				<li>
					<a href="..." class="hover:underline">
						Contacto
					</a>
				</li>
			</ul>
		</footer>
	);
};
