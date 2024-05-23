import React from 'react';

export const Header = () => {
  return (
    <div className='flex bg-transparent w-screen py-6'>
        <div className='flex gap-x-2 w-1/2 ml-10'>
            <div className='bg-primary rounded-3xl text-white'>
                STORE
            </div>

            <div className='flex gap-x-3 bg-white'>
                <h2>Mouses</h2>
                <h2>Keyboards</h2>
                <h2>Mouse</h2>
                <h2>Monitors</h2>
                <h2>Headsets</h2>
            </div>
        </div>

        <div className='flex gap-x-2 w-1/2 justify-end mr-10 bg-transparent'>
            <div className='bg-red-400 rounded-3xl'>
                <span className="icon-[material-symbols--search]"></span>
            </div>
            <div className='bg-red-400 rounded-3xl'>
                <span className="icon-[mdi--cart-outline]"></span>
            </div>
        </div>
    </div>
  )
}