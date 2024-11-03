import React, { useState } from "react";

const NavbarWithSearch = () => {
    const [searchOn, setSearchOn] = useState(false);

    const turnSearch = () => {
        setSearchOn(!searchOn);
    }

    const handleSearch = () => {
        return (
            <div className="h-6 mt-3">
                <form className="flex w-full">
                    <input className="bg-slate-800 mx-auto w-5/12 text-white rounded-lg pl-3" placeholder="Search by area or address" type="text"/>
                </form>
            </div>
        )
    }

    return(
        <div className="bg-transparent flex flex-col">
            <div className=" flex flex-row items-center">
                <a href="/"><img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tprhoiglqzbp9mbu8x8s/jhsereno-light" alt="logo" className="h-10 w-auto" /> </a>
                <div className="ml-10">
                    <ul className="font-semibold font-Lora flex items-center ">
                        <a href="/" className="uppercase mx-5 text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">meet the team</a>
                        <a href="/" className="uppercase text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">search for homes</a>
                        <a href="/" className="uppercase mx-5 text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">our communities</a>
                        <a href="/" className="uppercase text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">home valuation</a>
                        <a href="/" className="uppercase mx-5 text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">services</a>
                        <a href="/" className="uppercase text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">home across america</a>
                        <a href="/" className="uppercase mx-5 text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">testimonials</a>
                        <a href="/" className="uppercase text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">contact us</a>
                        <a href="/" className="uppercase text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200 mx-5">book an appointment</a>
                        <button onClick={turnSearch} className="uppercase text-xs hover:underline hover:underline-offset-4 transition-all mx-3 text-slate-200"><img src={`${searchOn ? "images/closesvg.svg" : "images/searchwhitesvg.svg"}`} width={20} height={20}/></button>
                    </ul>
                </div>
            </div>
            {searchOn ? handleSearch() : null}
        </div>
    )
}

export default NavbarWithSearch;