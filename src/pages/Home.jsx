import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';

const Home = () => {
    const [factura, setFactura] = useState({
        numero: '',
        monto: '',
        categoria: '',
        fecha: '',
        vendedor: '',
        ciudad: ''
    });

    const handleChange = (e) => {
        setFactura({ ...factura, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Factura registrada:', factura);
        alert('Factura registrada con éxito');
    };

    return (
        <div className="factura-pro">
            <aside className="sidebar">
                <section className="admin-icon">
                    <img src="public\img\loginPro.jpeg" alt="Profile Icon" className="login" />
                </section>
                <p>Administrador</p>
                <nav>
                    <ul>
                        <li>
                            <Link to="/facturapro">Registro de Facturas</Link>
                        </li>
                        <li>
                            <Link to="/registro">Control de Gastos</Link>
                        </li>
                        <li>
                            <Link to="/Egresos">Reportes Financieros</Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            <main className="main-content">
                <h1>Registros de Factura</h1>
                <section className="form-container">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Factura N° 
                            <input
                                type="text"
                                name="numero"
                                value={factura.numero}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Monto:
                            <input
                                type="number"
                                name="monto"
                                value={factura.monto}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Categoría:
                            <input
                                type="text"
                                name="categoria"
                                value={factura.categoria}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Vendedor:
                            <input
                                type="text"
                                name="vendedor"
                                value={factura.vendedor}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Ciudad:
                            <input
                                type="text"
                                name="ciudad"
                                value={factura.ciudad}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Fecha:
                            <input
                                type="date"
                                name="fecha"
                                value={factura.fecha}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <section className="button-group">
                            <button type="submit" className="register-btn">Registrar</button>
                            <button 
                                type="button" 
                                className="cancel-btn" 
                                onClick={() => setFactura({
                                    numero: '',
                                    monto: '',
                                    categoria: '',
                                    fecha: '',
                                    vendedor: '',
                                    ciudad: ''
                                })}
                            >
                                Cancelar
                            </button>
                        </section>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Home;
