import { About } from '../components/about/about';
import { Header } from '../components/header';

import Image from '../assets/img/main.jpg';

export const AboutPage = () => {
  return (
    <div className='h-screen' style={{ backgroundImage: `url(${Image})` }}>
      <Header />
      <About />
    </div>
  )
}