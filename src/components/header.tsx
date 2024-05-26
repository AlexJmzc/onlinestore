import React from 'react';

export const Header = () => {
  return (
    <div className='flex bg-transparent w-screen py-6'>
        <div className='flex gap-x-2 w-1/2 ml-10'>
            <div className='bg-primary rounded-3xl text-white px-4 py-2'>
                STORE
            </div>

            <div className='flex gap-x-6 bg-white px-6 py-2 rounded-3xl'>
                <h2>Mouses</h2>
                <h2>Keyboards</h2>
                <h2>Monitors</h2>
                <h2>Headsets</h2>
            </div>
        </div>

        <div className='flex gap-x-2 w-1/2 justify-end mr-10 bg-transparent'>
            <div className='flex items-center bg-white p-2 rounded-full'>
                <span className="w-4 h-4 icon-[material-symbols--search]"></span>
            </div>
            <div className='flex items-center bg-white p-2 rounded-3xl'>
                <span className="w-4 h-4 icon-[mdi--cart-outline]"></span>
            </div>
        </div>
    </div>
  )
}