import React from "react";

export const Contacto = () => {
    return (
        <div className="App-header">  
            <div className="container mx-auto justify-content-center">
                <div className="row">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Correo Electrónico:</label>
                        <input type="text" placeholder="correo@tucorreo.com" class="input input-ghost w-full max-w-xs form-control" id="exampleFormControlInput1"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Mensaje:</label>
                        <input type="text" placeholder="tu mensaje aqui" className="input input-ghost w-full max-w-xs form-control" id="exampleFormControlInput1"/>
                    </div>
                </div>
            </div>
        </div>
    );
};


