import React from "react";
import { Nonna } from "../components/corporativo/lanonna";
import { Moimoi } from "../components/corporativo/moimoi";
import { Manchas } from "../components/corporativo/manchas";
import { Savory } from "../components/corporativo/savory";

export const Corporativo = () => {
    return (  
        <div className="container mx-auto">
            <Nonna />
            <Moimoi />
            <Manchas />
            <Savory />
        </div>
    );
};