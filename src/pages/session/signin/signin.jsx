
export const SigninPage=()=>{

    return(
        <>
          <div className="signup">
            <div className="signup-content">
                <h1>JAMPY</h1>
            </div>
            <div className="signup-body">
                
           
                <div>
                    <label htmlFor="email">Correo Electronico</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" />
                </div>
              
                <div>
                    <button className="btn-signup">
                        Contunuar
                    </button>
                </div>
            </div>
       </div>
        </>
    );

}