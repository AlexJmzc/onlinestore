import Logo from '../assets/img/logo.png';

export const Header = () => {
  return (
    <div className='flex bg-transparent w-screen py-6'>
        <div className='flex w-1/3 ml-10'>
            <div className='flex gap-x-6 bg-white px-6 py-2 rounded-3xl font-medium h-max'>
                <h2>Home</h2>
                <h2>Products</h2>
                <h2>About Us</h2>
                <h2>Contact Us</h2>
            </div>
        </div>

        <div className='flex w-1/3 items-center justify-center'>
            <img className='w-12 h-16' src={Logo} alt='Logo' />
        </div>

        <div className='flex gap-x-2 w-1/3 justify-end mr-10 bg-transparent h-max'>
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