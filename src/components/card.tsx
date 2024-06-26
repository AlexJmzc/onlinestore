import React from 'react';

import image from '../assets/img/headsets.jpg';

export const Card = () => {
    return (
        <div className="relative flex items-end w-full max-w-[300px] h-[300px] p-7 bg-white shadow-lg transition-transform duration-500 ease-in-out rounded-[45px] hover:translate-y-5 group">
            <img 
                src={image} 
                alt="Product" 
                className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(208,195,195,0.5)] to-secondary transition-opacity duration-500 opacity-0 rounded-[40px] group-hover:opacity-100"></div>
            <div className="relative z-30 text-white opacity-0 transform translate-y-8 transition-opacity transition-transform duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <h1 className="text-xl m-0">Product</h1>
                <p className="tracking-wide text-sm my-2.5 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut alias
                    nam dolorum natus maiores deserunt ipsum explicabo quia dolore
                    rerum modi, perferendis unde a omnis praesentium totam inventore
                    eum soluta!
                </p>
                <a href="/#" className="no-underline py-2 px-4 bg-white text-gray-700 text-sm font-bold rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-700 hover:text-white">
                    Saber más
                </a>
            </div>
        </div>
    )
}