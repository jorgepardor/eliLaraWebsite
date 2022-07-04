import React from "react";

export const Footer = () => {
	return (
		<footer class="p-4 bg-Purple-dark shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
			<span class="text-sm text-Light-gray sm:text-center dark:text-gray-400">
				2022. All Rights Reserved.
			</span>
			<ul class="flex flex-wrap items-center mt-3 text-sm text-Light-gray dark:text-gray-400 sm:mt-0">
				<li>
					<a href="/assets/Elizabeth Lara Gonzalez.pdf" download class="font-Mukta text-sm  mr-4 hover:text-Yellow-custom md:mr-6" target="_blank" rel="noreferrer">
						Currículo
					</a>
				</li>
				<li>
					<a href="https://www.behance.net/elizabethlarag" class="font-Mukta text-sm mr-4 hover:text-Yellow-custom md:mr-6" target="_blank" rel="noreferrer">
						Behance
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/elizabeth-lara-gonzalez-12b14b36/" class="font-Mukta text-sm mr-4 hover:text-Yellow-custom md:mr-6" target="_blank" rel="noreferrer">
						LinkedIn
					</a>
				</li>
				<li>
					<a href="/contacto" class="font-Mukta text-sm hover:text-Yellow-custom" target="_blank" rel="noreferrer">
						Contacto
					</a>
				</li>
			</ul>
		</footer>
	);
};
