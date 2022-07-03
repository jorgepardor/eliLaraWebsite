import React, { useRef } from "react";
// import emailjs from "emailjs-com";
import emailjs from '@emailjs/browser'
// init("e9JTQGKbdi98hoAWx");

export const Contacto = () => {

    const form = useRef();

    const sendEmail = (event) => {

        event.preventDefault();

        emailjs.sendForm(
                "service_55zdgdg",
                "template_u0h3aqq",
                event.target,
                "e9JTQGKbdi98hoAWx"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        event.target.reset();
    }

    return (
        <div className="h-screen container mx-auto py-40">
            <form onSubmit={sendEmail}>
                <div className="grid l:grid-cols-2 l:gap-6 ">
                    <div className="relative z-0 mb-6 w-full px-3 group">
                        <input
                            type="text"
                            name="from_name"
                            id="floating_first_name"
                            className="block py-2.5 px-2 w-full text-sm text-Base-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:ring-0 focus:border-Purple-light peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_first_name"
                            className="absolute text-sm text-Base-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-L-Base-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nombre
                        </label>
                    </div>
                    <div className="relative z-0 mb-6 w-full px-3 group">
                        <input
                            type="email"
                            name="from_email"
                            className="block py-2.5 px-2 w-full text-sm text-Base-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:ring-0 focus:border-Purple-light peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="absolute text-sm text-Base-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-L-Base-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Correo electronico
                        </label>
                    </div>
                </div>
                <div className="relative z-0 mb-6 w-full px-3 group">
                    <input
                        type="text"
                        name="message"
                        className="block py-2.5 px-2 w-full text-sm text-Base-dark bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:ring-0 focus:border-Purple-light peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_email"
                        className="absolute text-sm text-Base-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-L-Base-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Mensaje
                    </label>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        value="ENVIAR MENSAJE"
                        className="text-Yellow-custom bg-Purple-dark hover:bg-Purple-light focus:ring-4 focus:outline-none focus:ring-Purple-dark font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-3 md:mr-0"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};
