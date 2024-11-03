import React, {useState, useEffect} from "react";
import NavBar from "./introcomponents/navBar";
import SearchBar from "./introcomponents/searchBar";
import NavbarWithSearch from "./introcomponents/navBarwithSearch";

const IntroSection = () => {

    const [fixed, setFixed] = useState(false);
    const [fixedSearch, setFixedSearch] = useState(false);

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
        <div className="relative h-[700px] w-full">
             <div className="-z-10 absolute top-0 inset-0 bg-black">
                <img src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQxNDUyfQ&w=1920" className="opacity-60 w-full h-full object-cover object-center" />
            </div> 
            <div className='relative w-5/6 flex mx-auto flex-col items-center'>
                <div className={`${fixed ? "fixed top-0 bg-black py-5 px-10 z-20 opacity-90" : "pt-16"} `}>
                    {fixed ?<NavbarWithSearch /> : <NavBar /> }
                </div>
                <h1 className="text-7xl text-white font-Lora font-light mt-36">Services</h1>
                <div className={`flex-col justify-center items-center mt-28  flex`}>
                    <SearchBar fixedSearch={fixedSearch}/>
                    <button className={`border-[1px] mt-20 p-4 bg-slate-800 hover:bg-slate-700 font-semibold text-xl opacity-90 border-black text-white font-Lora rounded-lg`}>Book an appointment &#8594;</button>
                </div>
            </div>
        </div>
    )
}

export default IntroSection;