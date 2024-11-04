import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavbarWithSearch = () => {
    const [searchOnMobile, setSearchOnMobile] = useState(false);
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
                    <img onClick={handleAppointment} src="images/closeblacksvg.svg" className="h-7 w-7 lg:hidden fixed top-10 right-10 cursor-pointer z-50" />
                    <img onClick={handleAppointment} src="images/closesvg.svg" className="hidden lg:block h-10 w-10 fixed top-10 right-10 cursor-pointer" />
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
                            <form className="mt-5 lg:mt-10 w-10/12">
                                <input type="text" placeholder="Name" className="pb-3 w-full my-5 border-b-2 border-black outline-none" />
                                <input type="text" placeholder="Phone" className="pb-3 w-full my-5 border-b-2 border-black outline-none" />
                                <input type="text" placeholder="Email" className="pb-3 w-full my-5 border-b-2 border-black outline-none" />
                                <input type="text" placeholder="Message" className="pb-3 w-full my-5 border-b-2 border-black outline-none" />
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


    const handleMenu = () => {
        setMenubar(!menubar);
    }


    const turnSearch = () => {
        setSearchOn(!searchOn);
    }

    

    const turnSearchMobile = () => {
        setSearchOnMobile(!searchOnMobile);
    }

    const handleSearch = () => {
        return (
            <motion.div className="h-6 mt-3" initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}}>
                <form className="flex w-full  rounded-b-lg">
                    <input className="bg-slate-800 mx-auto w-5/12 text-white rounded-lg pl-3" placeholder="Search by area or address" type="text"/>
                </form>
            </motion.div>
        )
    }

    const handleSearchMobile = () => {
        return (
            <motion.div className="h-10 mt-3 w-full" initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}}>
                <form className="flex items-center justify-center">
                    <input className="bg-slate-800 w-[320px] text-white rounded-lg pl-4" placeholder="Search by area or address" type="text"/>
                </form>
            </motion.div>
        )
    }

    return(
        <div className={`bg-transparent flex flex-col`}>
            <div className=" flex flex-row items-center">
                <a href="/"><img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tprhoiglqzbp9mbu8x8s/jhsereno-light" alt="logo" className="lg:h-6 min-[1281px]:h-10 w-auto" /> </a>
                <div className="lg:ml-10 lg:block  hidden">
                    <ul className="font-semibold font-Lora flex items-center ">
                        <a href="/" className="uppercase mx-3 min-[1281px]:mx-5 text-[9.1px] min-[1281px]:text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">meet the team</a>
                        <a href="/" className="uppercase mx-3 min-[1281px]:mx-5 text-[9.1px] min-[1281px]:text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">search for homes</a>
                        <a href="/" className="uppercase mx-3 min-[1281px]:mx-5 text-[9.1px] min-[1281px]:text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">our communities</a>
                        <a href="/" className="uppercase mx-3 min-[1281px]:mx-5 text-[9.1px] min-[1281px]:text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">home valuation</a>
                        <a href="/" className="uppercase mx-3 min-[1281px]:mx-5 text-[9.1px] min-[1281px]:text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">services</a>
                        <a href="/" className="uppercase mx-3 min-[1281px]:mx-5 text-[9.1px] min-[1281px]:text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">home across america</a>
                        <a href="/" className="uppercase mx-3 min-[1281px]:mx-5 text-[9.1px] min-[1281px]:text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">testimonials</a>
                        <a href="/" className="uppercase mx-3 min-[1281px]:mx-5 text-[9.1px] min-[1281px]:text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">contact us</a>
                        <a  onClick={handleAppointment} className="cursor-pointer uppercase  mx-3 min-[1281px]:mx-5 text-[9.1px] min-[1281px]:text-xs hover:underline hover:underline-offset-4 transition-all text-slate-200">book an appointment</a>
                        <button onClick={turnSearch} className="uppercase text-xs hover:underline hover:underline-offset-4 transition-all mx-3 text-slate-200"><img src={`${searchOn ? "images/closesvg.svg" : "images/searchwhitesvg.svg"}`} width={20} height={20}/></button>
                    </ul>
                </div>
                <h2 onClick={handleMenu} className="max-lg:block hidden text-white font-Lora ml-5 font-medium">Menu</h2>
            </div>
            <AnimatePresence>
            {searchOn ? handleSearch() : null}
            </AnimatePresence>
            {menubar && 
            <div className="fixed z-40 top-0 right-0 h-screen w-full bg-black opacity-90">
                <motion.div className="bg-transparent flex flex-col max-md:justify-between items-center pt-20">
                    <div className="flex flex-row">
                        <a href="/"><img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tprhoiglqzbp9mbu8x8s/jhsereno-light" alt="logo" className="h-10 w-auto" /> </a>
                        <button onClick={turnSearchMobile} className="ml-3 text-slate-200"><img src={`${searchOnMobile ? "images/closesvg.svg" : "images/searchwhitesvg.svg"}`} width={20} height={20}/></button>
                    </div>
                    {searchOn? handleSearchMobile() : null}
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

export default NavbarWithSearch;