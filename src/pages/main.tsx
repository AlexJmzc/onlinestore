import React from 'react';
import { Header } from '../components/header';

import Image from '../assets/img/main.jpg';

export const Main = () => {
  return (
    <div className='h-screen' style={{ backgroundImage: `url(${Image})` }}>
        <Header/>
    </div>
  )
}