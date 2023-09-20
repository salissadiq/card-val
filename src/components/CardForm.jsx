// Importing the 'React' library from 'react' package
import React from 'react';

// Importing various icons for user, credit card, calendar, and lock from 'react-icons/lia'
import { LiaUserEditSolid } from 'react-icons/lia';
import { LiaCreditCard } from 'react-icons/lia';
import { LiaCalendarAlt } from 'react-icons/lia';
import { LiaLockSolid } from 'react-icons/lia';

// Exporting the 'CardForm' component as the default export
export default function CardForm(props) {
    // Function to handle input changes and update card details
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let updatedValue = value;

        // Restricting the input length to two digits for expiryMonth and expiryYear
        if (name === 'expiryMonth' || name === 'expiryYear') {
            updatedValue = value.slice(0, 2);
        }

        // Updating the card details through child to parent component
        props.handleCardDetails(e);
    }

    // Function to move the cursor to year input after two digits of month
    const handleCursorMove = (e, nextInput) => {
        if (e.target.value.length === 2) {
            nextInput.focus();
        }
    }


    // Rendering the form with payment details
    return (
        <div className='flex flex-col font-mono'>

            {/* Payment Details Header */}
            <div className='my-10 text-2xl'>
                <h2>Payment details</h2>
            </div>

            {/* Payment Details Form */}
            <form onSubmit={props?.pay}>

                {/* Cardholder Name */}
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-sm font-light'>CARDHOLDER NAME</label>
                    <div className='flex gap-2 items-center'>
                        <LiaUserEditSolid className='text-3xl' />
                        <input type="text" name='cardHolder' value={props?.carddetails?.cardHolder} onChange={handleInputChange} className='focus:outline-none rounded-md bg-slate-200 w-[400px] py-2 px-4' required />
                    </div>
                </div>

                {/* Card Number */}
                <div className='flex flex-col my-10'>
                    <label htmlFor="" className='text-sm font-light'>CARD NUMBER</label>
                    <div className='flex gap-2 items-center'>
                        <LiaCreditCard className='text-3xl' />
                        <input type="number" name='cardNumber' value={props?.carddetails?.cardNumber} onChange={handleInputChange} className='focus:outline-none rounded-md bg-slate-200 w-[400px] py-2 px-4' required />
                    </div>
                </div>

                {/* Expiry Month, Expiry Year, and CVV */}
                <div className='flex my-10 gap-14'>
                    <div>
                        EXPIRY MONTH/YEAR
                        <div className='flex items-center'>
                            <LiaCalendarAlt className='text-3xl' />
                            <input type="text" name='expiryMonth' value={props?.carddetails?.expiryMonth} onChange={handleInputChange} maxLength="2" onKeyUp={(e) => handleCursorMove(e, e.target.nextSibling)} className='focus:outline-none rounded-md bg-slate-200 w-[60px] py-1 px-4 mr-1' required />

                            <input type="text" name='expiryYear' value={props?.carddetails?.expiryYear} onChange={handleInputChange} maxLength="2" className='focus:outline-none rounded-md bg-slate-200 w-[60px] py-1 px-4' required />
                        </div>
                    </div>

                    <div>
                        CVV
                        <div className='flex items-center'>
                            <LiaLockSolid className='text-3xl' />
                            <input type="text" name='cvv' value={props?.carddetails?.cvv} onChange={handleInputChange} className='focus:outline-none rounded-md bg-slate-200 w-[70px] py-1 px-4' required />
                        </div>
                    </div>
                </div>

                {/* Payment Button */}
                <div className=''>
                    <button className='bg-red-500 py-2 px-3 rounded-md text-white'>Pay now</button>
                </div>
            </form>
        </div>
    );
}
