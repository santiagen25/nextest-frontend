import React, { useState } from 'react';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { t } from 'i18next';

export default function ExploratoryTestForm() {
	usePageTitle('ExploratoryTest.title');

	const [form, setForm] = useState({
		titulo: '',
		descripcion: '',
		tipo: '',
		prioridad: '',
		automatizada: false,
		regresion: false,
		plan: '',
		requisito: '',
		sprint: ''
	});

	const [created, setCreated] = useState(false);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Exploratoria creada:', form);
		setCreated(true);
	};

	return (
		<div>
			<div className="d-flex vh-100">
				<div className="w-100 p-5">
					<h2>{t('ExploratoryTest.title')}</h2>

					<form onSubmit={handleSubmit}>
						<input className="form-control mb-3" name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} required />
						<input className="form-control mb-3" name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} required />
						<select className="form-select form-select-lg mb-3" name="tipo" value={form.tipo} onChange={handleChange} required>
							<option value="">Tipo de prueba</option>
							<option value="exploratoria">Exploratoria</option>
							<option value="funcional">Funcional</option>
						</select>
						<select className="form-select form-select-lg mb-3" name="prioridad" value={form.prioridad} onChange={handleChange} required>
							<option value="">Prioridad</option>
							<option value="alta">Alta</option>
							<option value="media">Media</option>
							<option value="baja">Baja</option>
						</select>
						<div className="d-flex justify-content-center">
							<label className="mb-3">
								<input type="checkbox" name="automatizada" checked={form.automatizada} onChange={handleChange} />
								Automatizada
							</label>
							<label className="mb-3">
								<input type="checkbox" name="regresion" checked={form.regresion} onChange={handleChange} />
								Regresión
							</label>
						</div>
						<select className="form-select form-select-lg mb-3" name="plan" value={form.plan} onChange={handleChange} required>
							<option value="">Plan de prueba</option>
							<option value="Plan A">Plan A</option>
							<option value="Plan B">Plan B</option>
						</select>
						<input className="form-control mb-3" name="requisito" placeholder="Requisito" value={form.requisito} onChange={handleChange} />
						<input className="form-control mb-3" name="sprint" placeholder="Sprint" value={form.sprint} onChange={handleChange} />

						<div className="mt-4">
							<button type="submit">Guardar prueba</button>
						</div>
					</form>

					{created && (
						<div className="mt-5 alert alert-success">
							<h5>✅ Prueba exploratoria guardada</h5>
							<p>Puedes seguir editando si necesitas modificar los datos.</p>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
