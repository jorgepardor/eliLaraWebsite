import React from "react";
import { Playboy } from "../components/editorial/playboy";
import { Toomuch } from "../components/editorial/toomuch";
import { Variedades } from "../components/editorial/variedades";

export const Editorial = () => {
    return (  
        <div className="container mx-auto">
            <Variedades />
            <Toomuch />
            <Playboy />
        </div>
    );
};