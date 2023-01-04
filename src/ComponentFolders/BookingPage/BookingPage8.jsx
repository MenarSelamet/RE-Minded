import React from 'react';
import Card1 from './Card';


function BookingPage8() {
   return (
     <div className="flex flex-col  p-24">
       <Card1
         header="YOUR REQUEST HAS BEEN SUBMITTED!"
         content="You will receive an email guiding you to book a date and time soon."
       />
       <div className="font-poppins shadow-zinc-300 flex flex-col w-full md:max-w-2xl lg:max-w-6xl my-16 mx-auto px-8 py-4 shadow-md">
         <h1 className="text-xl pb-6 md:text-2xl lg:text-3xl lg:flex justify-center">
           Request Submitted
         </h1>
         <h2 className="text-md pb-6 md:text-lg lg:text-xl lg:flex justify-center">
           You Will Receive A Confirmation Email Soon Please Keep An Eye On Your
           Mail.
         </h2>
         <button
           type="button"
           className='className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl'
         >
           BACK TO HOME
         </button>
       </div>
     </div>
   );
}

export default BookingPage8;