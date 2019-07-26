import React, {Component} from 'react';
import Cabezera from './Cabezera';
import Formulario from './Formulario';
import Recibo from './Recibo';

const conex1=new XMLHttpRequest();

class App extends Component {
  state = {
    resultado:[]
  } 
  enviarFormulario = (datos) => {
     const {usuario, clave, quincena} = datos;
     conex1.onreadystatechange = this.evaluarConexcion;
     conex1.open('GET','http://localhost/php/identificacion3.php?usuario='+usuario+'&clave='+clave+ '&quincena='+quincena, true);
     conex1.send();
  }

  evaluarConexcion = () => {

    if (conex1.readyState === 4) {
      const resultado=JSON.parse(conex1.responseText);
        console.log(resultado);
          this.setState({
            resultado: resultado[0]
          })
          console.log(resultado[0]);
        }
   
    }

  render() {
        
    return (
      <div className="App">
        <div className="Contenedor_Cabezera">
          <Cabezera />
        </div>
        <div className="Contenedor_Formulario">
          <Formulario 
            enviarFormulario={this.enviarFormulario}
          />
        </div>
        <div className="Contenedor_Recibo">
          <Recibo 
            resultado = {this.state.resultado}
          />
        </div>
      </div>

    );
  }
}

export default App;
