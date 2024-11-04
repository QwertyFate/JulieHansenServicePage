import React from "react";

const AboutSection = () => {
    return(
        <div className="flex flex-col mt-20 lg:w-10/12 mx-auto justify-center items-center">
            <div className="grid grid-flow-col-1 lg:grid-cols-2">
                <div className="flex flex-col font-Lora justify-center lg:mr-20 max-lg:mb-5 max-lg:w-10/12 max-lg:mx-auto">
                    <h1 className="text-3xl font-semibold text-center">Over 33 Years of Real Estate Success</h1>
                    <h2 className="text-justify mt-10 text-md text-slate-800">We provide every one of our clients with a level of service they won’t find anywhere else. We give them what they need, often before they know they need it. ​​​​​​​In real estate, almost everything can be negotiated. When you choose Hansen Partners It is experience is 100% nonnegotiable. ​​​​​​​ ​​​​​​​And it’s an experience like no other.</h2>
                </div>
                <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/azjfmtzx6evxpubynfci/edit-page-11r2" className=""/>
                <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/m5ea1kpipv5tiflnfx8t/edited-p-12"/>
                <div className="flex flex-col font-Lora justify-center w-10/12 lg:w-11/12 max-lg:mx-auto max-lg:mb-10 lg:ml-10">
                    <h1 className="text-xl lg:text-3xl font-semibold text-center">We Want To Create An Unforgettable Experience For You</h1>
                    <h2 className="text-justify mt-10 text-md  text-slate-800">We combine data gained from your home’s Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your home’s carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. ​​​​​​​ Successfully marketing a home in today’s real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.</h2>
                </div>
                <div className="flex flex-col font-Lora justify-center max-lg:mx-auto max-lg:w-10/12 lg:mr-20">
                    <h1 className="text-3xl font-semibold text-center">The Hansen Partners Communications Tablet</h1>
                    <h2 className="text-justify mt-5 text-md text-slate-800">We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the with a click of your tablet.</h2>
                    <h1 className="text-lg font-semibold mt-5">Benefits</h1>
                    <ul className="list-disc mt-5">
                        <li className="my-1">Review all documents and sign in the comfort of your home or anywhere.</li>
                        <li className="my-1">Stay up to date on all marketing activities, review materials, photos, etc. in real time.</li>
                        <li className="my-1">Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.</li>
                        <li className="my-1">You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us for fast communication using our Bomb bomb video messaging system."</li>
                    </ul>
                </div>
                <img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/fuammgjubhjfvgcqleef/edit-image-056"/>
            </div>
            <h2 className="mt-10 w-11/12 text-justify text-md font-Lora font-medium">We believe that transparency and guiding you and your family through the process is key to having the best experience.  During these uncertain times. It is a good feeling to know you have some one with a proven track record you can count on.  We will be here to handle your needs during the Real Estate process.  We think of it before a need even arises. Because, that is just what we do.  Who you work with does matter! </h2>
        </div>
        
    )
}

export default AboutSection