import { Header } from '../components/header';
import { Login } from '../components/login/login';

import Image from '../assets/img/main.jpg';

export const LoginPage = () => {
  return (
    <div className='h-screen' style={{ backgroundImage: `url(${Image})` }}>
        <Header />
        <Login />
    </div>
  )
}