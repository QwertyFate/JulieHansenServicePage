import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NavBar = (fixedSearch) => {

    const [searchOn, setSearchOn] = useState(false);
    const [menubar, setMenubar] = useState(false);
    const [appointment, setAppointment] = useState(false);

    const handleAppointment = () => {
        setAppointment(!appointment);
    }

    const AppointmentDiv = () => {
        return(
            <div className="h-screen w-screen bg-black backdrop-blur-xl opacity-95 fixed top-0 left-0 z-40">
                <div className="flex flex-col items-center mx-auto lg:mt-5 min-[1281px]:mt-40 bg-black justify-center lg:w-10/12 rounded-lg">
                    <img onClick={handleAppointment} src="images/closeblacksvg.svg" className="h-6 w-6 fixed top-6 right-6 cursor-pointer z-50" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 backdrop-blur-lg h-[600px]">
                        <div className="hidden lg:flex flex-col items-center justify-center mr-5 text-white font-Lora">
                            <img src="images/phonesvg.svg" className="h-10 w-10"/>
                            <a href="tel:(925) 553-6707" className="text-xl mt-10">(925) 553-6707</a>
                            <a href="mailto:luxuryhomesinwc@icloud.com" className="text-xl mt-10">luxuryhomesinwc@icloud.com</a>
                            <img src="images/markersvg.svg" className="mt-10 h-10 w-10"/>
                            <h1 className="text-xl font-medium mt-10">337 Chabot Drive, Pleasanton, CA 94588Julie</h1>
                            <h1 className="text-xl font-medium mt-10">Hansen-Orvis | CA DRE# 00934447</h1>
                        </div>
                        <div className="bg-white flex flex-col items-center justify-center font-Lora">
                            <h1 className="text-2xl lg:text-4xl mt-10 lg:mt-20 text-center">Submit A Message</h1>
                            <form className="mt-3 lg:mt-10 w-10/12">
                                <input type="text" placeholder="Name" className="pb-3 w-full my-4 lg:my-5 border-b-2 border-black outline-none" />
                                <input type="text" placeholder="Phone" className="pb-3 w-full my-4 lg:my-5 border-b-2 border-black outline-none" />
                                <input type="text" placeholder="Email" className="pb-3 w-full my-4 lg:my-5 border-b-2 border-black outline-none" />
                                <input type="text" placeholder="Message" className="pb-3 w-full my-4 lg:my-5 border-b-2 border-black outline-none" />
                            </form>
                            <div className="flex flex-row mt-5 ml-10 items-start">
                                <input type="checkbox"/>
                                <p className="text-[10px] tracking-wide text-justify lg:ml-2 w-10/12">By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our <a href="/" className="underline hover:opacity-70">Privacy Policy</a> and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.</p>
                            </div>
                            <button className="px-20 rounded-lg hover:bg-slate-700 py-3 text-white text-lg my-7 bg-black">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const turnSearch = () => {
        setSearchOn(!searchOn);
    }

    const handleSearch = () => {
        return (
            <motion.div className="h-10 mt-3 w-full" initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}}>
                <form className="flex items-center justify-center">
                    <input className="bg-slate-800 w-[320px] text-white rounded-lg pl-4" placeholder="Search by area or address" type="text"/>
                </form>
            </motion.div>
        )
    }

    const handleMenu = () => {
        setMenubar(!menubar);
    }

    return(
        <div>
            <motion.div className="bg-transparent flex flex-row max-md:justify-between items-center">
                <a href="/"><img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tprhoiglqzbp9mbu8x8s/jhsereno-light" alt="logo" className="h-10 w-auto" /> </a>
                <div className="min-[1281px]:ml-6 hidden lg:block ">
                    <motion.ul className="font-semibold font-Lora overflow-hidden " initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 },visible: { opacity: 1, transition: { staggerChildren: 0.9, duration:1 }}}}>
                        <motion.a initial="hidden" animate="visible" href="/" className="uppercase min-[1281px]:mx-5 text-xs lg:mx-3 hover:underline hover:underline-offset-4 transition-all text-slate-200">meet the team</motion.a>
                        <motion.a initial="hidden" animate="visible" href="/" className="uppercase text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">search for homes</motion.a>
                        <motion.a initial="hidden" animate="visible" href="/" className="uppercase min-[1281px]:mx-5 text-xs lg:mx-3 hover:underline hover:underline-offset-4 transition-all text-slate-200">our communities</motion.a>
                        <motion.a initial="hidden" animate="visible" href="/" className="uppercase text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">home valuation</motion.a>
                        <motion.a initial="hidden" animate="visible" href="/" className="uppercase min-[1281px]:mx-5 text-xs lg:mx-3 hover:underline hover:underline-offset-4 transition-all text-slate-200">services</motion.a>
                        <motion.a initial="hidden" animate="visible" href="/" className="uppercase text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">home across america</motion.a>
                        <motion.a initial="hidden" animate="visible" href="/" className="uppercase min-[1281px]:mx-5 text-xs lg:mx-3 hover:underline hover:underline-offset-4 transition-all text-slate-200">testimonials</motion.a>
                        <motion.a initial="hidden" animate="visible" href="/" className="uppercase  text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">contact us</motion.a>
                    </motion.ul>
                </div>
                <div onClick={handleMenu} className="block lg:hidden font-Lora text-md font-medium text-white ml-10 hover:text-slate-400">Menu</div>
            </motion.div>
            {menubar && 
            <div className="fixed z-40 top-0 right-0 h-screen w-full bg-black opacity-80">
                <motion.div className="bg-transparent flex flex-col max-md:justify-between items-center pt-20">
                    <div className="flex flex-row">
                        <a href="/"><img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tprhoiglqzbp9mbu8x8s/jhsereno-light" alt="logo" className="h-10 w-auto" /> </a>
                        <button onClick={turnSearch} className="ml-3 text-slate-200"><img src={`${searchOn ? "images/closesvg.svg" : "images/searchwhitesvg.svg"}`} width={20} height={20}/></button>
                    </div>
                    {searchOn? handleSearch() : null}
                    <div>
                        <motion.ul className="font-semibold font-Lora mt-10 overflow-hidden flex flex-col" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 },visible: { opacity: 1, transition: { staggerChildren: 0.9, duration:1 }}}}>
                            <motion.a initial="hidden" animate="visible" onClick={handleAppointment}  className="cursor-pointer uppercase text-lg text-center my-3 hover:underline hover:underline-offset-4 transition-all text-slate-200">Book an appointment</motion.a>
                            <motion.a initial="hidden" animate="visible" href="/" className="uppercase text-lg text-center my-3 hover:underline hover:underline-offset-4 transition-all text-slate-200">meet the team</motion.a>
                            <motion.a initial="hidden" animate="visible" href="/" className="uppercase text-lg text-center my-3 hover:underline hover:underline-offset-4 transition-all text-slate-200">search for homes</motion.a>
                            <motion.a initial="hidden" animate="visible" href="/" className="uppercase text-lg text-center my-3 hover:underline hover:underline-offset-4 transition-all text-slate-200">our communities</motion.a>
                            <motion.a initial="hidden" animate="visible" href="/" className="uppercase text-lg text-center my-3 hover:underline hover:underline-offset-4 transition-all text-slate-200">home valuation</motion.a>
                            <motion.a initial="hidden" animate="visible" href="/" className="uppercase text-lg text-center my-3 hover:underline hover:underline-offset-4 transition-all text-slate-200">services</motion.a>
                            <motion.a initial="hidden" animate="visible" href="/" className="uppercase text-lg text-center my-3 hover:underline hover:underline-offset-4 transition-all text-slate-200">home across america</motion.a>
                            <motion.a initial="hidden" animate="visible" href="/" className="uppercase text-lg text-center my-3 hover:underline hover:underline-offset-4 transition-all text-slate-200">testimonials</motion.a>
                            <motion.a initial="hidden" animate="visible" href="/" className="uppercase text-lg text-center my-3 hover:underline hover:underline-offset-4 transition-all text-slate-200">contact us</motion.a>
                        </motion.ul>
                    </div>
                    <img onClick={handleMenu} src="images/closesvg.svg" className="h-10 w-auto cursor-pointer fixed top-5 right-5" alt="closebutton"/>
                </motion.div>
            </div>}
            {appointment ? AppointmentDiv() : null}
        </div>
    )
}

export default NavBar;