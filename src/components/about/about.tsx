import AboutImage from '../../assets/img/about.jpg';

export const About = () => {
  return (
    <div className='h-max grid grid-cols-2 gap-x-6 mt-10 justify-items-center'>
        <img className='w-[300px] h-[400px] rounded-xl' src={AboutImage} alt='About' />

        <div className='bg-gray-950 w-[400px] h-[400px] rounded-lg'>
            <div className='text-white flex flex-col py-8 px-10 gap-y-4'>
              <h3 className='font-bold'>Sobre Nosotros</h3>
              <p>Descripción</p>
            </div>
        </div>
    </div>
  )
}