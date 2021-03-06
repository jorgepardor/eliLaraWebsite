import React from "react";

export const Cinema4d = () => {
    return (

        <div className="container mt-24">
            <p className="font-Mukta text-base text-center mt-6 mb-24">
               Hice un curso de modelado 3d utilizando el programa Cinema4d y estas imágenes son muestras de algunos de los ejercicios
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-6 mx-40">
                <div className="lg:col-span-6 mb-2">
                    <img
                        className="drop-shadow mx-auto w-full"
                        src="https://res.cloudinary.com/elizapardo/image/upload/v1656775170/3d/escenario-crehana-02_thnbru.webp"
                        alt="Imagen de proyectos en 3d con cinema4d"
                    />
                </div>

                <div className="lg:col-span-3 gap-2  mb-24">
                    <img
                        className="drop-shadow mx-auto"
                        src="https://res.cloudinary.com/elizapardo/image/upload/v1656775170/3d/Escenario_mascota_editado-03-web_ectvsj.webp"
                        alt="Imagen de proyectos en 3d con cinema4d"
                    />
                </div>
                <div className="lg:col-span-3 gap-2 mb-24">
                    <img
                        className="drop-shadow mx-auto"
                        src="https://res.cloudinary.com/elizapardo/image/upload/v1656775170/3d/totem_ykspzl.webp"
                        alt="Imagen de proyectos en 3d con cinema4d"
                    />
                </div>

            </div>
        </div>
    );
};
