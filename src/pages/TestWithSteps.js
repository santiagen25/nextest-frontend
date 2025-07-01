import React, { useState } from 'react';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import SidebarTest25 from '../components/SidebarTest25';
import { t } from 'i18next';

export default function TestWithSteps() {
	usePageTitle('TestWithSteps.title');

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

	const [pasos, setPasos] = useState([{ descripcion: '', resultado: '' }]);
	const [created, setCreated] = useState(false);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
	};

	const handlePasoChange = (index, field, value) => {
		const newPasos = [...pasos];
		newPasos[index][field] = value;
		setPasos(newPasos);
	};

	const handleAddPaso = () => {
		setPasos([...pasos, { descripcion: '', resultado: '' }]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Prueba creada:', { ...form, pasos });
		setCreated(true);
	};

	return (
		<div>
			<div className="d-flex min-vh-100">
				<SidebarTest25 />
				<div className="w-100 p-5">
					<h2>{t('TestWithSteps.title')}</h2>

					<form onSubmit={handleSubmit}>
						<input className="form-control mb-3" name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} required />
						<input className="form-control mb-3" name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} required />
						<select className="form-select form-select-lg mb-3" name="tipo" value={form.tipo} onChange={handleChange} required>
							<option value="">Tipo de prueba</option>
							<option value="funcional">Funcional</option>
							<option value="rendimiento">Rendimiento</option>
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

						<hr />
						<h5>Pasos:</h5>
						{pasos.map((paso, idx) => (
							<div key={idx} className="mb-3">
								<input
									className="form-control mb-3"
									placeholder={`Paso ${idx + 1} - Descripción`}
									value={paso.descripcion}
									onChange={(e) => handlePasoChange(idx, 'descripcion', e.target.value)}
								/>
								<input
									className="form-control mb-3"
									placeholder="Resultado esperado"
									value={paso.resultado}
									onChange={(e) => handlePasoChange(idx, 'resultado', e.target.value)}
								/>
							</div>
						))}
						<button type="button" onClick={handleAddPaso}>Añadir paso</button>

						<div className="mt-4">
							<button type="submit">Guardar prueba</button>
						</div>
					</form>

					{created && (
						<div className="mt-5 alert alert-success">
							<h5>✅ Prueba creada correctamente</h5>
							<p>Puedes editarla cambiando los campos anteriores y volviendo a enviar el formulario.</p>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
