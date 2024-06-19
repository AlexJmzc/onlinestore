import { Header } from "../header";

import Image from '../../assets/img/main.jpg';

export const Principal = () => {
    return (
        <div className='h-screen' style={{ backgroundImage: `url(${Image})` }}>
            <Header />
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
    )
}