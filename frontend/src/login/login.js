import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Importa useHistory desde react-router-dom
import '../assets/css/AdminLTE.css';
import './login.css';
import Img from "../assets/plantilla/logo_final_2.png";
import Img2 from "../assets/plantilla/parqueadero.jpeg";
import { Image } from "react-bootstrap";

const Login = () => {
    const history = useHistory(); // Inicializa useHistory

    const [ingUsuario, setIngUsuario] = useState('');
    const [ingPassword, setIngPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ingUsuario, ingPassword }),
            });
        
            const data = await response.json();
            console.log("respuesta: ", data);
        
            if (response.ok) {
                saveSession(data)
                console.log("Login successful", data);
        
                history.push({
                    pathname: '/inicio',
                    state: { data: data }
                });
            } else {
                console.error('Login failed');
                // Mostrar mensaje de error si el inicio de sesión falla
                setError('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error:', error);
            // Mostrar mensaje de error si hay un problema de red u otros errores
            setError('Error de conexión');
        }

    };
    const saveSession = (sessionData) => {
        try {
          localStorage.setItem('session', JSON.stringify(sessionData));
          console.log('Sesión guardada correctamente');
        } catch (e) {
          console.error('Error al guardar la sesión:', e);
        }
      };
    return (
        <div id="back" className="banner">
            <div className="login-box">
                <div className="login-box-body" style={{ borderRadius: '21px' }}>
                    <div className="login-logo">
                        <Image src={Img} className="img-responsive" style={{ padding: '1px 30px 0px 30px' }} />
                    </div>
                    <p className="login-box-msg" style={{ fontFamily: 'Anton, sans-serif', color: 'white', marginTop: '31%' }}>Ingresar al sistema</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group has-feedback">
                            <input type="text" className="form-control" style={{ fontFamily: 'Anton, sans-serif' }} placeholder="Usuario" name="ingUsuario" value={ingUsuario} onChange={(e) => setIngUsuario(e.target.value)} required />
                            <span className="fas fa-user form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" style={{ fontFamily: 'Anton, sans-serif' }} placeholder="Contraseña" name="ingPassword" value={ingPassword} onChange={(e) => setIngPassword(e.target.value)} required />
                            <span className="fas fa-lock form-control-feedback2"></span>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div className="row" style={{ alignItems: 'center', justifyContent: 'center', marginTop: '11%' }}>
                            <div className="col-xs-4">
                                <button type="submit" style={{ fontFamily: 'Anton, sans-serif' }} className="btn btn-primary btn-block btn-flat">Ingresar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
