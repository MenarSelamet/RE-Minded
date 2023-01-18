import React from 'react';
import masterCard from './Images/mastercard.svg';
import PinkCard from './Images/PinkCard.svg';


function CreditCard({ nameOnCard, cardNumber, expirationDate, deleteCard, previewButton }) {

    
  return (
    <div
      className=" box-border rounded-lg h-full w-full font-poppins m-2"
      style={{
        backgroundImage: `url(${PinkCard})`,

        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        top: 0,
      }}
    >
      <div className="flex flex-row">
        <div className="pl-12 pt-12  text-white">
          <div className="p-4">{expirationDate}</div>
          <div className="p-4">{cardNumber}</div>
          <div className="p-4">{nameOnCard}</div>
        </div>
        <div className="p-12 pl-28">
          <img src={masterCard} alt="mastercard" />
        </div>
      </div>
      <div className="p-4 flex justify-end">
        {previewButton && (<button
          className=" rounded-md box-border p-2 lg:pl-6 lg:pr-6 lg:text-lg md:text-base text-sm transition-all duration-250 bg-Buttons hover:bg-cyan-500"
          type="button"
        >
          {deleteCard}
        </button>)}
      </div>
    </div>
  );
}

export default CreditCard;
