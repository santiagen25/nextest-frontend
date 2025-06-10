import React, { useState } from 'react';
import Sidebar25 from '../components/Sidebar25';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';

export default function ConfigurateProject() {
	const [form, setForm] = useState({
		productName: '',
		description: '',
		startDate: '',
		endDate: '',
		environment: '',
		environmentUrl: '',
	});

	usePageTitle('configurateProject.title');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Formulario enviado:', form);
		// Aquí puedes hacer el POST a tu backend
	};

	return (
		<div>
			<div className="d-flex vh-100">
				<Sidebar25 />
				<div className="w-75 d-flex align-items-center justify-content-center mx-auto">
					<div className="px-5">
						<h2 className="mb-4">Configurar nuevo proyecto</h2>
						<div className="d-flex justify-content-center">
							<form className="adaptedForm" onSubmit={handleSubmit}>

								<div>
									<label className="form-label mt-5 mb-0">Nombre del producto</label>
									<input type="text" className="form-control" name="productName" value={form.productName} onChange={handleChange} />
								</div>

								<div>
									<label className="form-label mt-3 mb-0">Descripción del producto</label>
									<textarea className="form-control" name="description" rows="3" value={form.description} onChange={handleChange} />
								</div>

								<div>
									<label className="form-label mt-3 mb-0">Fecha inicio</label>
									<input type="date" className="form-control" name="startDate" value={form.startDate} onChange={handleChange} />
								</div>

								<div>
									<label className="form-label mt-3 mb-0">Fecha fin</label>
									<input type="date" className="form-control" name="endDate" value={form.endDate} onChange={handleChange} />
								</div>

								<div>
									<label className="form-label mt-3 mb-0">Entorno</label>
									<select className="form-select form-select-lg" name="environment" value={form.environment} onChange={handleChange}>
										<option value="">Selecciona un entorno</option>
										<option value="test">Test</option>
										<option value="produccion">Producción</option>
										<option value="pre">Pre-producción</option>
									</select>
								</div>

								<div>
									<label className="form-label mt-3 mb-0">URL del entorno</label>
									<input type="url" className="form-control" name="environmentUrl" value={form.environmentUrl} onChange={handleChange} />
								</div>

								<div className="d-flex justify-content-end mt-4">
									<button type="submit" className="text-uppercase">Guardar</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
