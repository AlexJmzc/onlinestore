import React from 'react';
import { Header } from '../components/header';

import Image from '../assets/img/main.jpg';
import { Card } from '../components/card';

export const Main = () => {
  return (
    <>
      <div className='h-screen' style={{ backgroundImage: `url(${Image})` }}>
          <Header/>
          <div className='flex h-auto font-bold'>
              <div className='w-1/2 text-7xl mt-20 ml-10'>
                <div className='flex flex-col gap-y-4 w-3/4'>
                    <h1 className='text-white'>LOS</h1>
                    <h1 className='text-quaternary'>MEJORES</h1>
                    <h1 className='text-white'>PRODUCTOS</h1>
                </div>
              </div>

              <div className='w-1/2 text-white mt-20 text-3xl ml-10'>
                  COMPRA AHORA CON DESCUENTOS INCREÍBLES
              </div>
          </div>
      </div>

      <div className='h-max grid grid-cols-3 gap-y-10 justify-items-center'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </>
  )
}