import './Login.css'


const Login = () => {
    return (
        <section className="login-container">
                <div className='login-box'>
                    <img className='logo' src="/public/img/loginPro.jpeg"  alt="logo" />
                    <form>
                        <section>
                            <label htmlFor="">Email</label>
                            <input type="email" />
                        </section>
                        <section>
                            <label htmlFor="">Contraseña</label>
                            <input type="password" />
                        </section>
                        <a href="">¿Olvidates Tu Contraseña?</a>
                        <button  type="button">Iniciar Sesión</button>
                    </form>
                </div>
        </section>
    )
}

export default Login