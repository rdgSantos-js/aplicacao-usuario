import React from 'react';
import './App.css';

import { MessagesList } from "./containers/MessegesList"
import { AddMessage } from "./containers/AddMessage"

class User{
  static getUser(){
      return localStorage.getItem('user')
  }
}

class App extends React.Component{

  state = {
      user: User.getUser()
  }   

  render = () => (

      <div>
          <UserTab/>
          <div className="container">
                  
                      <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
                          <div className="chat-box">
                                  <Chat/> 
                                  <AddMessage />
                          </div>
                      </div>
                  
          </div>
      </div>

  );

}

class UserTab extends React.Component{

  componentDidMount(){
      this.toGetOffline();
  }

  toGetOffline(){
      let btnGetOffline = document.querySelector('section.user button');

      btnGetOffline.addEventListener('click', e=>{

          localStorage.removeItem('user');
          document.location.reload(true);

      });
  }

  render = () => (

      <section className="user row">
          <div className="col-6 d-flex align-items-center justify-content-center">               
              <i className="fa fa-user"/>
          </div>
          <div className="col-6">               
              <p className="mb-2 d-flex justify-content-center">{ User.getUser() }</p>
              <button className="d-flex justify-content-center">SAIR</button>
          </div>
      </section>

  );

}

class Chat extends React.Component{

  render = () => (
      
      <div className="chat-bar">
          
          <section className="chat">
                <div className="chat-tab" id="chat-tab">
                    <MessagesList />
                </div>
          </section>
      </div>
  );

}

export default App;
