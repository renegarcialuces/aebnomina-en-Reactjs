import React, {Component} from 'react';

class Formulario extends Component {
	usuarioRef = React.createRef();
	claveRef = React.createRef();
	quincenaRef = React.createRef();

	enviarFormulario = (e) => {
		e.preventDefault()
	
			const infoUsuario = {
				usuario: this.usuarioRef.current.value,
				clave: this.claveRef.current.value,
				quincena: this.quincenaRef.current.value
			}
				this.props.enviarFormulario(infoUsuario);

				e.currentTarget.reset();
			
		}
	render() {
		return(
			<div className="formulario">
				<h3>Imprime tu Recibo</h3>
				<form metod="post" onSubmit={this.enviarFormulario}>
					<label htmlFor="usuario"><b>Usuario:</b></label>
					<input type="text" ref={this.usuarioRef} name="usuario" autoComplete="off" autoFocus={true} placeholder="Escriba su nombre de usuario" />
					<label htmlFor="clave"><b>Clave:</b></label>
					<input type="password" ref={this.claveRef} name="clave" autoComplete="off" placeholder="Escriba su clave" />
					<label htmlFor="quincena"><b>Quincena:</b></label>
					<select name="quincena" id="quincena" ref={this.quincenaRef}> 	 <option value="">Elija una quincena...</option>
						<option value="dbnomina_15032019">1ra marzo 2019</option>
						<option value="dbnomina_30032019">2da marzo 2019</option>
						<option value="dbnomina_15042019">1ra abril 2019</option>
						<option value="dbnomina_30042019">2da abril 2019</option>
					</select>
					<input type="submit" id="consultar" value="Consultar" />
				</form>
			</div>
			);
	}
}

export default Formulario;
