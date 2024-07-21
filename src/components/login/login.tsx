
export const Login = () => {
  return (
    <div className='bg-primary flex justify-center items-center'>
        <div className='bg-white p-10 rounded-md shadow-md w-1/2'>
            <input type="text" placeholder='Usuario'/>
            <input type="password" placeholder='Contraseña'/>
            <button className='p-4 bg-quaternary rounded-xl text-center'>Iniciar Sesión</button>
        </div>

        <div>
            <p className='text-center'>¿No tienes cuenta, regístrate?</p>
        </div>
    </div>
  )
}