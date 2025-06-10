import React, { useState } from 'react';
import { t } from 'i18next';
import Sidebar25 from '../components/Sidebar25';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';

export default function CreateProject() {
	const [form, setForm] = useState({
		projectName: '',
		description: '',
		email: '',
		product: '',
		startDate: '',
		endDate: '',
		testType: ''
	});

	usePageTitle('createProject.title');

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Aquí llamarías al servicio para guardar el proyecto
			console.log("Formulario enviado:", form);
		} catch (error) {
			alert("Error al enviar datos");
		}
	};

	return (
		<div>
			<div className="d-flex vh-100">
				<Sidebar25 />
				<div className="w-75 d-flex align-items-center justify-content-center mx-auto">
					<div className="px-5">
						<h3 className="mb-4">{t('createProject.letsStartTesting')}</h3>
						<div className="d-flex justify-content-center">
							<form className="adaptedForm" onSubmit={handleSubmit}>
								<h4>{t('createProject.aboutProject')}</h4>
								<div>
									<p className="mt-5 mb-0">{t('createProject.projectName')}:</p>
									<input name="projectName" value={form.projectName} onChange={handleChange} required />
								</div>
								<div>
									<p className="mt-3 mb-0">{t('createProject.descripcion')}:</p>
									<input name="description" value={form.description} onChange={handleChange} required />
								</div>
								<div>
									<p className="mt-3 mb-0">{t('createProject.email')}:</p>
									<input name="email" value={form.email} onChange={handleChange} required />
								</div>
								<div>
									<p className="mt-3 mb-0">{t('createProject.producto')}:</p>
									<input name="product" value={form.product} onChange={handleChange} required />
								</div>
								<div>
									<p className="mt-3 mb-0">{t('createProject.fechaInicio')}:</p>
									<input type="date" name="startDate" value={form.startDate} onChange={handleChange} required />
								</div>
								<div>
									<p className="mt-3 mb-0">{t('createProject.fechaFin')}:</p>
									<input type="date" name="endDate" value={form.endDate} onChange={handleChange} required />
								</div>
								<div>
									<p className="mt-3 mb-0">{t('createProject.TipoTest')}:</p>
									<select className="form-select form-select-lg" name="testType" value={form.testType} onChange={handleChange} required>
										<option value="" disabled>{t('createProject.seleccionaTipo')}</option>
										<option value="manual">{t('createProject.manual')}</option>
										<option value="automated">{t('createProject.automatizado')}</option>
									</select>
								</div>
								<div className="d-flex justify-content-end mt-4">
									<button type="submit" className="text-uppercase">{t('createProject.crear')}</button>
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
