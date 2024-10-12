
import React from "react";
import './Egresos.css';

const Egresos = () => {
    const handleLogout = () => {
        // Aquí iría la lógica para cerrar sesión
        console.log("Cerrando sesión...");
    };

    return (
        <div className="container">
            <div className="sidebar">
                <div className="profile">
                    <img src="public/img/loginPro.jpeg" alt="Logo Factura Pro" />
                </div>

                <div className="logout-icon" onClick={handleLogout}>
                    <img src="public/img/Cierre.png" alt="Cerrar sesión" />
                </div>

                <ul className="menu">
                    <li><a href="/FacturaPro">Registro de Facturas</a></li>
                    <li><a href="/Registro">Control de Gastos</a></li>
                    <li><a href="/Egresos">Reportes Financieros</a></li>
                </ul>
            </div>

            <main className="main-content">
                <h1>Reporte sobre ingresos y egresos</h1>
                <section className="report">
                    <section className="section">
                        <h2>Ingresos</h2>
                        <div className="download-icons">
                            <img src="public/img/logoexcel.jpg" alt="Descargar Excel" />
                            <img src="public/img/logopdf.png" alt="Descargar PDF" />
                        </div>
                    </section>
                    <section className="section">
                        <h2>Egresos</h2>
                        <div className="download-icons">
                            <img src="public/img/logoexcel.jpg" alt="Descargar Excel" />
                            <img src="public/img/logopdf.png" alt="Descargar PDF" />
                        </div>
                    </section>
                </section>

                <div className="actions">
                    <button className="btn guardar">Guardar</button>
                    <button className="btn cancelar">Cancelar</button>
                </div>
            </main>
        </div>
    );

};

export default Egresos;
