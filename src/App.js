import React, {Component} from 'react';
import helice from './helice.png';
import ventilador from './ventilador.png'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      classe_velocidade: 'App-logo',
      velocidade: 1
    }

  
  
  }
  aumentar = () =>{
   this.state.velocidade === 1 ? this.setState({classe_velocidade: 'App-logo-media', velocidade: 2})
   : this.setState({classe_velocidade: 'App-logo-alta', velocidade: 3})

   if (this.state.velocidade === 3){
     this.setState({velocidade:1, classe_velocidade: 'App-logo'})
   }
  }
    
    

  render(){
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
        <img src={helice} className={this.state.classe_velocidade} alt="ventilador" />
        </p>
        <p><img src={ventilador} className="ventilador" alt="logo" /></p>

        
       <button type='button' className="botao" onClick={this.aumentar}>Aumentar Velocidade</button>
      </header>
    </div>
  );}
}

export default App;
