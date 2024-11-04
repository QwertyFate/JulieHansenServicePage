import React from "react";

const WorkwithusSection = () => {
    return(        
        <div className="relative h-[600px] lg:h-[700px] w-full">
             <div className="-z-10 absolute top-0 inset-0 bg-black">
                <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/skkve0aqzhkkyiytn92d/work-with-us" alt="workwithusimg" className="opacity-60 w-full h-full object-cover object-center" />
            </div> 
            <div className="relative w-5/6 flex mx-auto font-Lora flex-col items-center text-white ">
                <h1 className="pt-20 lg:pt-56 text-5xl font-light ">Work With Us</h1>
                <div className="w-40 mt-10 border-b-[2px] border-white "></div>
                <p className="text-md mt-10 lg:w-4/12 text-center tracking-widest">With decades of experience in luxurious Tri Valley real estate, our team is here to ensure that your dreams are a reality. Let us guide you through your home buying journey, contact us today!</p>
                <a href="/" className="mt-20 border-2 border-white rounded-xl hover:bg-white hover:border-black">
                <button className="uppercase py-5 px-16 text-lg font-semibold hover:text-black">Contact Us</button>
                </a>
            </div>
        </div>
    )
}

export default WorkwithusSection;