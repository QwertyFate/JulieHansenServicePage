import React, { useEffect, useState } from "react";

const NavBar = (fixedSearch) => {

    return(
        <div className="bg-transparent flex flex-row items-center">
            <a href="/"><img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tprhoiglqzbp9mbu8x8s/jhsereno-light" alt="logo" className="h-10 w-auto" /> </a>
            <div className="ml-10">
                <ul className="font-semibold font-Lora ">
                    <a href="/" className="uppercase mx-5 text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">meet the team</a>
                    <a href="/" className="uppercase text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">search for homes</a>
                    <a href="/" className="uppercase mx-5 text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">our communities</a>
                    <a href="/" className="uppercase text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">home valuation</a>
                    <a href="/" className="uppercase mx-5 text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">services</a>
                    <a href="/" className="uppercase text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">home across america</a>
                    <a href="/" className="uppercase mx-5 text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">testimonials</a>
                    <a href="/" className="uppercase text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">contact us</a>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;