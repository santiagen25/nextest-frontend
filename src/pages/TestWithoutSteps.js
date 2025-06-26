import React, { useState } from 'react';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import SidebarTest25 from '../components/SidebarTest25';

export default function TestWithoutSteps() {
	usePageTitle('Diseño de prueba sin pasos');

	const [form, setForm] = useState({
		titulo: '',
		descripcion: '',
		tipo: '',
		prioridad: '',
		automatizada: false,
		regresion: false,
		plan: '',
		requisito: '',
		sprint: '',
		resultadoEsperado: ''
	});

	const [created, setCreated] = useState(false);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Prueba sin pasos creada:', form);
		setCreated(true);
	};

	return (
		<div>
			<div className="d-flex vh-100">
				<SidebarTest25 />
				<div className="w-100 p-5">
					<h2>Diseño de prueba sin pasos</h2>

					<form onSubmit={handleSubmit}>
						<input name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} required />
						<input name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} required />
						<select name="tipo" value={form.tipo} onChange={handleChange} required>
							<option value="">Tipo de prueba</option>
							<option value="funcional">Funcional</option>
							<option value="rendimiento">Rendimiento</option>
						</select>
						<select name="prioridad" value={form.prioridad} onChange={handleChange} required>
							<option value="">Prioridad</option>
							<option value="alta">Alta</option>
							<option value="media">Media</option>
							<option value="baja">Baja</option>
						</select>
						<label>
							<input type="checkbox" name="automatizada" checked={form.automatizada} onChange={handleChange} />
							Automatizada
						</label>
						<label>
							<input type="checkbox" name="regresion" checked={form.regresion} onChange={handleChange} />
							Regresión
						</label>
						<select name="plan" value={form.plan} onChange={handleChange} required>
							<option value="">Plan de prueba</option>
							<option value="Plan A">Plan A</option>
							<option value="Plan B">Plan B</option>
						</select>
						<input name="requisito" placeholder="Requisito" value={form.requisito} onChange={handleChange} />
						<input name="sprint" placeholder="Sprint" value={form.sprint} onChange={handleChange} />
						<textarea
							name="resultadoEsperado"
							placeholder="Resultado esperado"
							value={form.resultadoEsperado}
							onChange={handleChange}
							className="form-control mt-3"
							required
						/>

						<div className="mt-4">
							<button type="submit">Guardar prueba</button>
						</div>
					</form>

					{created && (
						<div className="mt-5 alert alert-success">
							<h5>✅ Prueba creada correctamente</h5>
							<p>Puedes editar los campos anteriores y volver a guardar si quieres actualizarla.</p>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
