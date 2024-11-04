import React from "react";
import { motion } from "framer-motion";

const ProcessSection = () => {

    const containerVariant = {
        hidden: {opacity:0},
        visible:{opacity:1, transition:{staggerChildren:0.5}}
    }

    const itemVariant = {
        hidden: {opacity:0, y:50},
        visible:{opacity:1, y:0, transition:{duration:0.6}}
    }


    return(
        <div className="relative max-lg:pb-10 lg:h-[600px] w-full mt-16 lg:mt-32">
            <div className="-z-10 absolute top-0 inset-0 bg-black">
                <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gihsg13plfsb8xfbzmlf/image-027" className="opacity-60 w-full h-full object-cover object-center" />
            </div>
            <div className="relative flex mx-auto flex-col items-center pt-32 ">
               <h1 className="text-3xl lg:text-5xl font-Lora text-slate-200 font-medium">The Selling Process</h1>
               <motion.div className="grid-cols-1 lg:grid-cols-5 grid mt-20 w-11/12" variants={containerVariant} initial="hidden" whileInView="visible" viewport={{once:true}}>
                    <motion.div className="flex flex-col max-lg:mt-5 justify-center items-center text-center mx-2 py-20 px-3 border-white border-[1px] backdrop-blur-sm rounded-3xl hover:scale-110 cursor-pointer"
                        variants={itemVariant}>
                        <h1 className="text-white text-3xl font-Lora border-b-[1px] mb-5">1st Step</h1>
                        <h2 className="uppercase text-slate-300 text-xl opacity-85 font-semibold ">Initial Consultation & Planning</h2>
                    </motion.div>
                    <motion.div className="flex flex-col max-lg:mt-5 justify-center items-center text-center mx-2 py-20 px-3 border-white border-[1px] backdrop-blur-sm rounded-3xl hover:scale-110 cursor-pointer"
                        variants={itemVariant}>
                        <h1 className="text-white text-3xl font-Lora border-b-[1px] mb-5">2nd Step</h1>
                        <h2 className="uppercase text-slate-300 text-xl opacity-85 font-semibold ">Devise & Execute Marketing Plan</h2>
                    </motion.div>
                    <motion.div className="flex flex-col max-lg:mt-5 justify-center items-center text-center mx-2 py-20 px-3 border-white border-[1px] backdrop-blur-sm rounded-3xl hover:scale-110 cursor-pointer"
                        variants={itemVariant}>
                        <h1 className="text-white text-3xl font-Lora border-b-[1px] mb-5">3rd Step</h1>
                        <h2 className="uppercase text-slate-300 text-xl opacity-85 font-semibold ">Review Offers & Reach Agreement with Buyer</h2>
                    </motion.div>
                    <motion.div className="flex flex-col max-lg:mt-5 justify-center items-center text-center mx-2 py-20 px-3 border-white border-[1px] backdrop-blur-sm rounded-3xl hover:scale-110 cursor-pointer"
                        variants={itemVariant}>
                        <h1 className="text-white text-3xl font-Lora border-b-[1px] mb-5">4th Step</h1>
                        <h2 className="uppercase text-slate-300 text-xl opacity-85 font-semibold ">Complete Transaction Process</h2>
                    </motion.div>
                    <motion.div className="flex flex-col max-lg:mt-5 justify-center items-center text-center mx-2 py-20 px-3 border-white border-[1px] backdrop-blur-sm rounded-3xl hover:scale-110 cursor-pointer"
                        variants={itemVariant}>
                        <h1 className="text-white text-3xl font-Lora border-b-[1px] mb-5">5th Step</h1>
                        <h2 className="uppercase text-slate-300 text-xl opacity-85 font-semibold ">After - Sale Service</h2>
                    </motion.div>
               </motion.div>
            </div>
       </div>
        
    )
}

export default ProcessSection;