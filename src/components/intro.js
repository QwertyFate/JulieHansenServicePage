import React, {useState, useEffect} from "react";
import NavBar from "./introcomponents/navBar";
import SearchBar from "./introcomponents/searchBar";
import NavbarWithSearch from "./introcomponents/navBarwithSearch";

const IntroSection = () => {

    const [fixed, setFixed] = useState(false);
    const [fixedSearch, setFixedSearch] = useState(false);
    const [appointment, setAppointment] = useState(false);

    const handleAppointment = () => {
        setAppointment(!appointment);
    }

    const AppointmentDiv = () => {
        return(
            <div className="h-screen w-screen bg-black backdrop-blur-xl opacity-95 fixed top-0 left-0 z-50">
                <div className="flex flex-col items-center mx-auto lg:mt-5 min-[1281px]:mt-40 bg-black justify-center w-10/12 rounded-lg">
                    <img onClick={handleAppointment} src="images/closesvg.svg" className="h-10 w-10 fixed top-10 right-10 cursor-pointer"/>
                    <div className="grid grid-cols-2 backdrop-blur-lg h-[600px]">
                        <div className="flex flex-col items-center justify-center mr-5 text-white font-Lora">
                            <img src="images/phonesvg.svg" className="h-10 w-10"/>
                            <a href="tel:(925) 553-6707" className="text-xl mt-10">(925) 553-6707</a>
                            <a href="mailto:luxuryhomesinwc@icloud.com" className="text-xl mt-10">luxuryhomesinwc@icloud.com</a>
                            <img src="images/markersvg.svg" className="mt-10 h-10 w-10"/>
                            <h1 className="text-xl font-medium mt-10">337 Chabot Drive, Pleasanton, CA 94588Julie</h1>
                            <h1 className="text-xl font-medium mt-10">Hansen-Orvis | CA DRE# 00934447</h1>
                        </div>
                        <div className="bg-white flex flex-col items-center justify-center font-Lora">
                            <h1 className="text-4xl mt-20 text-center">Submit A Message</h1>
                            <form className="mt-10 w-10/12">
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

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            const stickyPoint = 200;
            const stickyPointSearch =500;
            
            if(scrollPos > stickyPoint) {
                setFixed(true);
            } else {
                setFixed(false);
            }
            if(scrollPos > stickyPointSearch) {
                setFixedSearch(true);
            } else {
                setFixedSearch(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])


    return(        
        <div className="relative h-[450px] lg:h-[700px] w-full">
             <div className="-z-10 absolute top-0 inset-0 bg-black">
                <img src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQxNDUyfQ&w=1920" className="opacity-60 w-full h-full object-cover object-center" />
            </div> 
            <div className='relative min-[1281px]:w-5/6 flex mx-auto flex-col items-center'>
                <div className={`${fixed ? "fixed top-0 bg-black py-5 px-10 z-20 opacity-90" : "lg:pt-16 pt-10"} `}>
                    {fixed ?<NavbarWithSearch /> : <NavBar /> }
                </div>
                <h1 className="text-4xl lg:text-7xl text-white font-Lora font-light mt-28 lg:mt-36">Services</h1>
                <div className={`lg:flex hidden flex-col justify-center items-center mt-28 `}>
                    <SearchBar fixedSearch={fixedSearch}/>
                    <button onClick={handleAppointment} className={`border-[1px] mt-20 p-4 bg-slate-800 hover:bg-slate-700 font-semibold text-xl opacity-90 border-black text-white font-Lora rounded-lg`}>Book an appointment &#8594;</button>
                </div>
            </div>
            <div className="fixed bottom-5 right-4 lg:hidden flex flex-col z-50">
                <div className="p-2 rounded-full bg-white border-2 my-2 flex items-center border-slate-800">
                    <a href="mailto:luxuryhomesinwc@icloud.com"><img src="images/mailsvg.svg" alt="maillogo" className="h-10 w-10 cursor-pointer" /></a>
                </div>
                <div className="p-2 rounded-full bg-white border-2 my-2 flex items-center border-slate-800">
                    <a href="tel:(925) 980-4925"><img src="images/phoneblacksvg.svg" alt="maillogo" className="h-10 w-10 cursor-pointer" /></a>
                </div>
            </div>
            {appointment ? AppointmentDiv() : null}
        </div>
    )
}

export default IntroSection;