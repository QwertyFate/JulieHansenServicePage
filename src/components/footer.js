import React from "react";

const Footer = () => {
    return(
        <div className="grid grid-cols-2 mt-20 w-9/12 mx-auto">
            <div className="flex flex-col font-Lora justify-center">
                <h1 className="text-3xl font-semibold">Julie Hansen Partnership</h1>
                <p className="text-black opacity-80 mt-8 text-justify w-10/12">An elite group of the East Bay’s most talented and visionary real estate professionals believed buyers and sellers deserved more from their real estate company. More service. More resources. More integrity. More global reach. In a word, more of everything people should expect when they buy or sell their homes.</p>
                <div className="flex flex-row mt-32">
                    <div className="flex flex-col">
                        <h2 className="font-bold text-lg">Address</h2>
                        <p className="text-lg opacity-90 w-7/12">4733 Chabot Drive #100 Pleasanton, CA 94588 </p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-bold text-lg">CONTACT INFORMATION</h2>
                        <a href="tel:(925) 980-4925" className="text-lg opacity-90 hover:underline">(925) 553-6707</a>
                        <a href="mailto:luxuryhomesinwc@icloud.com" className="text-lg opacity-90 hover:underline">luxuryhomesinwc@icloud.com</a>
                    </div>
                </div>
                <h1 className="font-bold text-lg mt-10">​​​​​​​Julie Hansen-Orvis | CA DRE# 00934447</h1>
                <div className="flex flex-row mt-16 items-center">
                    <a href="/"><img src="images/facebooksvg.svg" alt="facebooklogo" height={40} width={40} className="mx-2 hover:opacity-70"/></a>
                    <a href="/"><img src="images/linkedinsvg.svg" alt="linkedinlogo" height={35} width={35} className="mx-2 hover:opacity-70"/></a>
                </div>
            </div>
            <div className="flex flex-col font-Lora justify-center ml-40">
                <h1 className="text-3xl font-semibold">Newsletter</h1>
                <p className="text-black text-xl  mt-8 text-justify w-8/12">Subscribe to our Newsletter for latest news and updates. Stay tuned! </p>
                <form className="w-9/12">
                    <input type="text" className="border-b-2 border-black w-full focus:outline-none mt-20" placeholder="Email Address"/>
                    <div className="flex flex-row mt-5 items-start">
                        <input type="checkbox"/>
                        <p className="text-xs tracking-wide text-justify ml-2">By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our <a href="/" className="underline hover:opacity-70">Privacy Policy</a> and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.</p>
                    </div>
                </form>
                <button className="text-md uppercase font-bold tracking-widest hover:bg-black hover:text-white self-start mt-10 py-3 px-8 border-2 border-black">Subscribe</button>
                <div className="mt-11 flex flex-row items-center">
                    <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zbesma34ygwklawiysod/dark-realtor-logo_x1vczu" height={50} width={50} className="mx-5" alt="realtorlogo"/>
                    <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/siun2nwoji9w7v0mssvy/dark-equal-logo_gahxpa" height={50} width={50} className="mx-5" alt="darkequallogo"/>
                    <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qje0mcix0r0qeoiikumu/sereno-logo"   className="h-3 w-auto mx-5" alt="serenologo"/>
                </div>
            </div>
            <h2 className="mt-10 mb-20 text-xl font-medium">Website Designed & Developed by <a href="/" className="underline hover:opacity-70 font-bold">Luxury Presence</a></h2>
            <h2 className="mt-10 mb-20 text-xl font-medium ml-40">Copyright 2024 | Privacy Policy</h2>
        </div>
    )
}

export default Footer;