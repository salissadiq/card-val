import React from 'react'
import { CiCreditCardOff } from 'react-icons/ci'
import { SiAmericanexpress } from 'react-icons/si';
import { LiaCcMastercard } from 'react-icons/lia'
import { LiaCcVisa } from 'react-icons/lia'
import { FcSimCardChip } from 'react-icons/fc'
import splitCardNumber from '../utils/splitCardnumber';
import detectCardType from '../utils/detectCardType';

export default function Card(props) {
    return (
        <div className='h-[320px] w-[550px] rounded-lg bg-red-500 flex flex-col'>
            <div className='grid place-content-end mt-5 mr-5 text-6xl text-white'>


                {detectCardType(props?.carddetails?.cardNumber) === 'MasterCard' ? <LiaCcMastercard /> : detectCardType(props?.carddetails?.cardNumber) === 'Visa' ? <LiaCcVisa /> : detectCardType(props?.carddetails?.cardNumber) === 'American Express' ? <SiAmericanexpress /> : <CiCreditCardOff />}
            </div>
            <div className='text-7xl ml-10 rounded-md mt-5'><FcSimCardChip /></div>
            <div className='text-white text-2xl ml-10 my-5 font-mono tracking-[4px] h-8 max-h-8 min-h-8'>{splitCardNumber(props.carddetails.cardNumber)}</div>
            <div className='flex gap-16 ml-10 text-white font-mono mt-2'>
                <div className='flex flex-col gap-2'>
                    <p className='text-xs font-bold'>CARD HOLDER</p>
                    <p className='font-mono w-[200px] max-w[200px] min-w[200px]'>{props?.carddetails?.cardHolder}</p>
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
