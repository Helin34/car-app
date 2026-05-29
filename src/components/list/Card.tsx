import { motion } from "framer-motion";
import type { CarType } from "../../types"
import Button from "../button";
import Info from "./Info";
import { useState } from "react";
import Modal from "../modal";
import generateImage from "../../utils/generateImage";

type Props ={
    car:CarType;
}
const Card = ({car}:Props) => {
    const [isOpen,setIsOpen]=useState<boolean>(false);

    const handleOpen =()=>{
        setIsOpen(true)
        document.body.style.overflow="hidden";
    }
    const handleClose =()=>{
        setIsOpen(false)
        document.body.style.overflow="auto";
    }
  return (
    <motion.div
    initial={{scale:0.5,opacity:0}}
    whileInView={{scale:1,opacity:1}}
    className="car-card group">
        <h2 className="car-card__content-title">{car.make} {car.model}</h2>

        <div className="flex mt-6 text-[19px]">
            <span className="font-semibold">₺</span>
            <span className="text-[32px]">
                {Math.round(Math.random() * 7000)+1500}
            </span>
            <span className="font-semibold self-end">/gün</span>
        </div>
        <div className="w-full">
            <img className="w-full h-full object-contain" src={generateImage(car)} alt="" />
        </div>
        <div className="w-full">
           <div className="group-hover:hidden"> <Info car={car}/></div>
            <div className="mt-[4px] hidden group-hover:flex"><Button designs="w-full py-[25px] text-white" title="Daha Fazla"
            icon="right-arrow.svg"
            handleClick={handleOpen}/>
            </div>
        </div>
      <Modal isOpen={isOpen} close={handleClose} car={car} />
    </motion.div>
  )
}

export default Card
