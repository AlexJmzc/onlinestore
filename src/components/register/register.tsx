
export const Register = () => {
  return (
    <div className='bg-transparent flex justify-center items-center h-max mt-5'>
        <div className='bg-white flex flex-col p-10 rounded-md gap-y-10 shadow-md w-1/2'>
            <input type="text" placeholder='Nombre Completo'/>
            <input type="email" placeholder='Correo'/>
            <input type="text" placeholder='Usuario'/>
            <input type="password" placeholder='Contraseña'/>
            <input type="password" placeholder='Confirmar Contraseña'/>
            <button className='p-4 bg-quaternary rounded-xl text-center'>Registrarse</button>

            <p className='text-center'>¿Ya tienes cuenta, inicia sesión?</p>
        </div>
    </div>
  )
}
