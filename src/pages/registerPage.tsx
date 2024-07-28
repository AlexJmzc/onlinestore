import { Header } from '../components/header';
import { Register } from '../components/register/register';

import Image from '../assets/img/main.jpg';

export const RegisterPage = () => {
  return (
    <div className='h-screen' style={{ backgroundImage: `url(${Image})` }}>
        <Header />
        <Register />
    </div>
  )
}