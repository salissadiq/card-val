// Importing the 'React' library from 'react' package
import React from 'react';

// Importing various credit card icons from respective packages
import { CiCreditCardOff } from 'react-icons/ci';
import { SiAmericanexpress } from 'react-icons/si';
import { LiaCcMastercard } from 'react-icons/lia';
import { LiaCcVisa } from 'react-icons/lia';
import { FcSimCardChip } from 'react-icons/fc';

// Importing utility functions for splitting card number and detecting card type
import splitCardNumber from '../utils/splitCardnumber';
import detectCardType from '../utils/detectCardType';

// Exporting the 'Card' component as the default export
export default function Card(props) {
    return (
        // Main card container with styles and flex layout
        <div className='h-[320px] w-[550px] rounded-lg bg-red-500 flex flex-col'>

            {/* Card Type Icon */}
            <div className='grid place-content-end mt-5 mr-5 text-6xl text-white'>
                {/* Displaying card type icon based on detected card type */}
                {detectCardType(props?.carddetails?.cardNumber) === 'MasterCard' ? <LiaCcMastercard /> :
                    detectCardType(props?.carddetails?.cardNumber) === 'Visa' ? <LiaCcVisa /> :
                        detectCardType(props?.carddetails?.cardNumber) === 'American Express' ? <SiAmericanexpress /> :
                            <CiCreditCardOff />}
            </div>

            {/* Chip Icon */}
            <div className='text-7xl ml-10 rounded-md mt-5'><FcSimCardChip /></div>

            {/* Displaying split card number */}
            <div className='text-white text-2xl ml-10 my-5 font-mono tracking-[4px] h-8 max-h-8 min-h-8'>
                {splitCardNumber(props.carddetails.cardNumber)}
            </div>

            {/* Card details: Card Holder, Expiry Date, CVV */}
            <div className='flex gap-16 ml-10 text-white font-mono mt-2'>
                {/* Card Holder */}
                <div className='flex flex-col gap-2'>
                    <p className='text-xs font-bold'>CARD HOLDER</p>
                    <p className='font-mono w-[200px] max-w[200px] min-w[200px]'>
                        {props?.carddetails?.cardHolder}
                    </p>
                </div>

                {/* Expiry Date */}
                <div className='flex flex-col gap-2'>
                    <p className='text-xs font-bold'> EXPIRES</p>
                    <p >{`${props?.carddetails?.expiryMonth ? props?.carddetails?.expiryMonth : ''}/${props?.carddetails?.expiryYear ? props?.carddetails?.expiryYear : ''}`}</p>
                </div>

                {/* CVV */}
                <div className='flex flex-col gap-2'>
                    <p className='text-xs font-bold'>CVV</p>
                    <p>{props?.carddetails?.cvv}</p>
                </div>
            </div>
        </div>
    );
}
