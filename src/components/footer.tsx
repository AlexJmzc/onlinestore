
export const Footer = () => {
    return (
        <div className='bg-primary flex flex-col gap-y-12 mx-6 mt-12 px-16 py-16 text-white'>
            <div className=' grid grid-cols-4'>
                <div className='flex flex-col gap-y-6'>
                    <h1 className='font-bold'>Explorar</h1>
                    <div className='flex flex-col gap-y-2'>
                        <h3>Monitores</h3>
                        <h3>Teclados</h3>
                        <h3>Mouses</h3>
                        <h3>Auriculares</h3>
                    </div>
                </div>

                <div className='flex flex-col gap-y-6'>
                    <h1 className='font-bold'>Empresa</h1>
                    <div className='flex flex-col gap-y-2'>
                        <h3>Sobre Nosotros</h3>
                    </div>
                </div>

                <div className='flex flex-col gap-y-6'>
                    <h1 className='font-bold'>Contacto</h1>
                    <div className='flex flex-col gap-y-2'>
                        <h3>Contáctanos</h3>
                    </div>
                </div>

                <div className='flex gap-x-7'>
                    <span className="w-6 h-6 icon-[mdi--instagram]" role="img" aria-hidden="true"></span>
                    <span className="w-6 h-6 icon-[mdi--facebook]" role="img" aria-hidden="true"></span>
                    <span className="w-6 h-6 icon-[ri--twitter-x-line]" role="img" aria-hidden="true"></span>
                </div>
            </div>

            <div className='flex justify-between'>
                <h3>@ 2024 X6Store. Todos los derechos reservados</h3>
                <div className='flex gap-x-6'>
                    <h3>Términos & Condiciones</h3>
                    <h3>Política de Privacidad</h3>
                    <h3>Política de Cookies</h3>
                </div>
            </div>
        </div>
    )
}