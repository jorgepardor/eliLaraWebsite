import React from "react";
import { CustomType } from "../components/personal/customtype";
import { Monster } from "../components/personal/monster";
import { Flowers } from "../components/personal/flowers";
import { Escudo } from "../components/personal/escudo";


export const Personal = () => {
    return (  
        <div className="container mx-auto">

            <CustomType />
            <Monster />
            <Flowers />
            <Escudo />

        </div>
    );
};