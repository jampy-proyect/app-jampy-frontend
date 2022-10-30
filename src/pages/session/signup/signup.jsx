import React from "react";

import './signup.css';

export const SignupPage=()=>{

    return(
       <div className="signup">
            <div className="signup-content">
                <h1>JAMPY</h1>
            </div>
            <div className="signup-body">
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="Apellido">Apellido</label>
                    <input type="text" name="lastname" />
                </div>
                <div>
                    <label htmlFor="email">Correo Electronico</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <label htmlFor="Password">Repita su contraseña</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <button className="btn-signup">
                        Contunuar
                    </button>
                </div>
            </div>
       </div>
    );
}