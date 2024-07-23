import { useState } from "react"

export const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameChange = (e: any) => {
      const user = e.target.value;
      setUsername(user);
  }

  const passwordChange = (e:any) => {
    const pass = e.target.value;
    setPassword(pass);
  }

  const fieldsValidation = () => {
    if (username === '' || password === '') {
      return false;
    }

    return true;
  }

  const login = () => {
    const validation = fieldsValidation();
    !validation ? console.log('El usuario y contraseña son obligatorios') : console.log('');
  }

  return (
    <div className='bg-primary flex justify-center items-center'>
        <div className='bg-white p-10 rounded-md shadow-md w-1/2'>
            <input type="text" placeholder='Usuario' value={username} onChange={() => usernameChange} required/>
            <input type="password" placeholder='Contraseña' value={password} onChange={() => passwordChange} required/>
            <button className='p-4 bg-quaternary rounded-xl text-center'>Iniciar Sesión</button>
        </div>

        <div>
            <p className='text-center'>¿No tienes cuenta, regístrate?</p>
        </div>
    </div>
  )
}