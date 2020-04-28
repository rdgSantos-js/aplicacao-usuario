import React from 'react';
import './Login.css';

class Login extends React.Component{

    componentDidMount(){
        this.toLogin();
    }

    toLogin(){

        let btnLogIn = document.querySelector('.form-group .button');
        let userInput = document.querySelector('.form-group input');

        btnLogIn.addEventListener('click',e => {
            
            localStorage.setItem('user', userInput.value);
            window.location.href = "http://localhost:3000/chat";

        });

    }
    
    render = () => (

        <div className="d-flex justify-content-center align-items-center login-tab" 
        style={{ 
            height: '100vh'
        }}>
            <form onSubmit={e=>{
                e.preventDefault();
            }}>

                <div className="form-group d-flex flex-row">
                    <input type="text" placeholder="Usuário:" />
                </div>
              
                <div className="form-group d-flex flex-row" style={{ zIndex: '999' }}>
                        <button className="d-flex flex-fill justify-content-center button">ENTRAR</button>
                </div>

            </form>
        </div>

    );

}
export default Login;