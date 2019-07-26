import React, {Component} from 'react';
import '../css/Recibo.css';

class Recibo extends Component {
	mostrarRecibo = () => {
		
	const {
		nom_trabajador,
		ci_trabajador,
		fecha_ing,
		cargo_trabajador,
		anos_servicio,
		grado_trabajador,
		sueldo_mes,
		sueldo_quincena,
		p_compensacion,
		p_antiguedad,
		p_hijos,
		p_prof,
		p_cargo,
		p_transporte,
		p_capacidad,
		dif_salario,
		dif_quincena,
		b_lonch,
		b_nocturno,
		b_domyferia,
		total_asig,
		total_quincena,
		ret_sso,
		ret_rpe,
		ret_faov,
		ret_tss,
		ret_sindicato,
		ret_manutencion,
		des_dias_no_labor,
		total_deduc,
		quincena_pagar
	} = this.props.resultado;
	
	if (!ci_trabajador) return null;

	return (
		<div className="Recibo">
			<div className="Contorno_Recibo">
				<table className="Cabezera_Recibo">
					<caption><b>Recibo de Pago - Quincena: </b><hr /></caption>
					<tr id="tabla1_linea1"><td><b>No. Cédula:</b></td><td><b>Nombre y Apellido:</b></td><td><b>Fecha de Ingreso:</b></td></tr>
					<tr id="tabla1_linea2"><td>{ci_trabajador}</td><td>{nom_trabajador}</td><td>{fecha_ing}</td></tr>

					<tr id="tabla1_linea3"><td><b>Cargo:</b></td><td><b>Años de servicio:</b></td><td><b>Grado:</b></td><td><b>Sueldo mensual:</b></td></tr>
					<tr id="tabla1_linea4"><td>{cargo_trabajador}</td><td>{anos_servicio}</td><td>gradoTrabajador</td><td>{sueldo_mes}</td></tr>
				</table>
				<hr/>
				<table className="Detalle_Recibo">
					<tr id="tabla2_linea1"><th>  CONCEPTOS  </th><th>  ASIGNACIONES  </th><th>  DEDUCCIONES  </th></tr>
				</table>

				<hr />
				<table className="Cuerpo_Recibo">
					<tr id="tabla3_linea1"><td>Sueldo quincena:</td><td>{sueldo_quincena}</td><td></td></tr>
					<tr id="tabla3_linea2"><td>Prima de compensación:</td><td>{p_compensacion}</td><td></td></tr>
					<tr id="tabla3_linea3"><td>Prima de antiguedad:</td><td>{p_antiguedad}</td><td></td></tr>
					<tr id="tabla3_linea4"><td>Prima por hijos:</td><td>{p_hijos}</td><td></td></tr>
					<tr id="tabla3_linea5"><td>Prima de profesionalización:</td><td>{p_prof}</td><td></td></tr>
					<tr id="tabla3_linea6"><td>Prima funcionario alto nivel:</td><td>{p_cargo}</td><td></td></tr>
					<tr id="tabla3_linea7"><td>Prima de transporte:</td><td>{p_transporte}</td><td></td></tr>
					<tr id="tabla3_linea8"><td>Prima por capacidad:</td><td>{p_capacidad}</td><td></td></tr>
					<tr id="tabla3_linea9"><td>Diferencia sueldo/salario:</td><td>{dif_salario}</td><td></td></tr>
					<tr id="tabla3_linea10"><td>Diferencia quincena anterior:</td><td>{dif_quincena}</td><td></td></tr>
					<tr id="tabla3_linea11"><td>Bono lonch:</td><td>{b_lonch}</td><td></td></tr>
					<tr id="tabla3_linea12"><td>Bono nocturno:</td><td>{b_nocturno}</td><td></td></tr>
					<tr id="tabla3_linea13"><td>Bono Domingos y Feriados:</td><td>{b_domyferia}</td><td></td></tr>
					<tr id="tabla3_linea14"><td>Retención seguro social obligatorio:</td><td></td><td>{ret_sso}</td></tr>
					<tr id="tabla3_linea15"><td>Retención rpe:</td><td></td><td>{ret_rpe}</td></tr>
					<tr id="tabla3_linea16"><td>Retención faov:</td><td></td><td>{ret_faov}</td></tr>
					<tr id="tabla3_linea17"><td>Retención tss:</td><td></td><td>{ret_tss}</td></tr>
					<tr id="tabla3_linea18"><td>Retención cuota sindical:</td><td></td><td>{ret_sindicato}</td></tr>
					<tr id="tabla3_linea19"><td>Retención obligación de manutención:</td><td></td><td>{ret_manutencion}</td></tr>
					<tr id="tabla3_linea20"><td>Descuento días no laborados:</td><td></td><td>{des_dias_no_labor}</td></tr>
				</table>
			<hr />
			<table className="Totales_Recibo">
				<tr id="tabla4_linea1"><td>Totales:</td><td>{total_asig}</td><td>{total_deduc}</td></tr>
				<tr id="tabla4_linea2"><td><b>TOTAL A PAGAR QUINCENA:</b></td><td>{quincena_pagar}</td><td></td></tr>
			</table>
		</div>
		<div className="boton_imprimir">
			<button id="consultar">Imprimir</button>
		</div>
		</div>

		)
}
	render(){

	return(
		<div>
			
			{this.mostrarRecibo()}
		</div>		
		)
	}

}

export default Recibo;