
export const Register = () => {
  return (
    <div className='bg-primary flex justify-center items-center'>
        <div className='bg-white p-10 rounded-md shadow-md w-1/2'>
            <input type="text" placeholder='Nombre Completo'/>
            <input type="email" placeholder='Correo'/>
            <input type="text" placeholder='Usuario'/>
            <input type="password" placeholder='Contraseña'/>
            <input type="password" placeholder='Confirmar Contraseña'/>
            <button className='p-4 bg-quaternary rounded-xl text-center'>Registrarse</button>
        </div>

        <div>
            <p className='text-center'>¿Ya tienes cuenta, inicia sesión?</p>
        </div>
    </div>
  )
}
