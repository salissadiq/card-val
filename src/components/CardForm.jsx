import React from 'react'
import { LiaUserEditSolid } from 'react-icons/lia'
import { LiaCreditCard } from 'react-icons/lia'
import { LiaCalendarAlt } from 'react-icons/lia'
import { LiaLockSolid } from 'react-icons/lia'
export default function CardForm(props) {
    const handleInputChange = (e) => {
        props.handleCardDetails(e)
    }

    return (
        <div className='flex flex-col font-mono'>
            <div className='my-10 text-2xl'>
                <h2>Payment details</h2>
            </div>
            <form onSubmit={props?.pay} >
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-sm font-light'>CARDHOLDER NAME</label>
                    <div className='flex gap-2 items-center'>
                        <LiaUserEditSolid className='text-3xl' />
                        <input type="text" name='cardHolder' onChange={handleInputChange} className='focus:outline-none border border-t-white border-r-white border-l-white border-b-red-500 w-[400px] py-2 px-4' />
                    </div>
                </div>

                <div className='flex flex-col my-10'>
                    <label htmlFor="" className='text-sm font-light'>CARD NUMBER</label>
                    <div className='flex gap-2 items-center'>
                        <LiaCreditCard className='text-3xl' />
                        <input type="text" name='cardNumber' onChange={handleInputChange} className='focus:outline-none border border-t-white border-r-white border-l-white border-b-red-500 w-[400px] py-2 px-4' />
                    </div>
                </div>

                <div className='flex my-10 gap-14'>
                    <div>
                        EXPIRY MONTH
                        <div className='flex items-center'>
                            <LiaCalendarAlt className='text-3xl' />
                            <input type="text" name='month' onChange={handleInputChange} className='focus:outline-none border border-t-white border-r-white border-l-white border-b-red-500 w-[86px] py-2 px-4' />
                        </div>
                    </div>
                    <div>
                        EXPIRY YEAR
                        <div className='flex items-center'>
                            <LiaCalendarAlt className='text-3xl' />
                            <input type="text" name='year' onChange={handleInputChange} className='focus:outline-none border border-t-white border-r-white border-l-white border-b-red-500 w-[86px] py-2 px-4' />
                        </div>
                    </div>
                    <div>
                        CVV
                        <div className='flex items-center'>
                            <LiaLockSolid className='text-3xl' />
                            <input type="text" name='cvv' onChange={handleInputChange} className='focus:outline-none border border-t-white border-r-white border-l-white border-b-red-500 w-[86px] py-2 px-4' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-red-500 py-2 px-3 rounded-md text-white'>Pay now</button>
                </div>
            </form>
        </div>
    )
}
