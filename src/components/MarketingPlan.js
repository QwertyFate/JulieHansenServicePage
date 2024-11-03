import React from "react";

const MarketingPlanSection = () => {
    return (
        <div className="mt-32 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-Lora font-medium">Comprehensive Marketing Plan</h1>
            <div className="flex flex-row justify-between">
                <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/hqguvxyyi5jciyrzy35v/page-3" height={800} width={800}/>
                <div>
                    <ul className="grid grid-cols-2 grid-rows-2 mt-12">
                        <li className="flex items-center justify-center flex-col font-Lora">
                            <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/rmtn3r5zpsljdsncbwa4/image-007" alt="mailpic" height={180} width={180}/>
                            <h2 className="text-3xl font-medium">Responsive</h2>
                            <h3 className="text-md mt-5 opacity-90 w-5/6 text-center">I am always available via phone, text, or email.</h3>
                        </li>
                        <li className="flex items-center justify-center flex-col font-Lora">
                            <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ks8ztlvw2b35q5qgs6xn/image-011" alt="flagpic" height={180} width={180}/>
                            <h2 className="text-3xl font-medium">Syndication</h2>
                            <h3 className="text-md mt-5 opacity-90 w-5/6 text-center">I market your property locally, nationally, and internationally</h3>
                        </li>
                        <li className="flex items-center justify-center flex-col font-Lora">
                            <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zr3bugldblvebixagfs1/image-009" alt="markerpic" height={180} width={180}/>
                            <h2 className="text-3xl font-medium">Virtual Tour</h2>
                            <h3 className="text-md mt-5 opacity-90 w-5/6 text-center">Let's make your home stand out with a high quality virtual tour.</h3>
                        </li>
                        <li className="flex items-center justify-center flex-col font-Lora">
                            <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/dywgmsgzddtcsqxagbwh/image-013" alt="camerapic" height={180} width={180}/>
                            <h2 className="text-3xl font-medium">Photography</h2>
                            <h3 className="text-md mt-5 opacity-90 w-5/6 text-center">Beautiful, high-end photography is a central part of our marketing plan for your property.</h3>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-20">
                <li className="flex items-center justify-center flex-col font-Lora mr-20">
                    <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qljffx423kswkhh1oyc3/image-081" alt="drone" height={200} width={200}/>
                    <h2 className="text-3xl font-medium">Drone Photography</h2>
                    <h3 className="text-md mt-5 opacity-90 w-5/6 text-center">Beautiful photography is a central part of our marketing plan for your property.</h3>
                </li>
                <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/vxnwvueubpgtfzn1k3cs/edited-p25" className="h-auto w-[450px] ml-40" alt="phonepic"/>
            </div>
            <div className="grid grid-cols-2 mt-20">
                <div className="bg-black h-[450px] w-[720px] flex items-center justify-center">
                    <h1 className="text-4xl text-white font-Lora font-medium">Decor Guidance</h1>
                </div>
                <img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/ghtq7jtce7tsgdjtosrs/image-025" className="h-[450px] w-auto" />
                <img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/axx0whb7xfmlwhvcckrr/image-023" className="h-[450px] w-auto"/>
                <div className="h-[450px] w-[720px] flex items-center justify-center flex-col">
                    <h1 className="text-4xl  font-Lora font-medium">My Staging Expertise</h1>
                    <ul className="list-disc mt-5 font-Lora font-semibold ">
                        <li className="mt-3">Unclutter and organize your home</li>
                        <li className="mt-3">Neatly arrange drawers and cabinets</li>
                        <li className="mt-3">Keep pets outdoors or off the premises</li>
                        <li className="mt-3">Play soft music</li>
                    </ul>
                </div>
                <div className="bg-black h-[450px] w-[720px] flex items-center justify-center">
                    <h1 className="text-4xl text-white font-Lora font-medium">Intentional Layout</h1>
                </div>
                <img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tvntwvzwsjyi3ndwtpux/image-022" className="h-[450px] w-auto" />
                <img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/lpaq7euqjebackcuwsdu/image-024" className="h-[450px] w-auto" />
                <div className="h-[450px] w-[720px] flex items-center justify-center flex-col">
                    <ul className="list-disc mt-5 font-Lora font-semibold ">
                        <li className="mt-3">Unclutter and organize your home</li>
                        <li className="mt-3">Neatly arrange drawers and cabinets</li>
                        <li className="mt-3">Keep pets outdoors or off the premises</li>
                        <li className="mt-3">Play soft music</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MarketingPlanSection