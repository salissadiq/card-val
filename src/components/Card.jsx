import React from 'react'
import { FaCcMastercard } from 'react-icons/fa'
import { FaCcVisa } from 'react-icons/fa';
import { BiLogoMastercard } from 'react-icons/bi'
import { LiaCcVisa } from 'react-icons/lia'
import { LiaCcMastercard } from 'react-icons/lia'
export default function Card() {
    return (
        <div className='h-[320px] w-[550px] rounded-lg bg-red-500 flex flex-col'>
            <div className='grid place-content-end mt-5 mr-5 text-6xl text-white'>
                {/* <LiaCcMastercard /> */}
                <LiaCcVisa />
            </div>
            <div className='h-10 w-16 bg-orange-400 ml-10 rounded-md mt-5'></div>
            <div className='text-white text-2xl ml-10 my-9 font-mono tracking-[4px]'>4256 7890 5678 4532</div>
            <div className='flex gap-16 ml-10 text-white font-mono'>
                <div className='flex flex-col gap-2'>
                    <p className='text-xs font-bold'>CARD HOLDER</p>
                    <p className='font-mono'>SALISU SADIQ GEBE</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-xs font-bold'> EXPIRES</p>
                    <p >09/20</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-xs font-bold'>CVV</p>
                    <p >123</p>
                </div>
            </div>
        </div>
    )
}
