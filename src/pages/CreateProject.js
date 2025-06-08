import React, { useState } from 'react';
import { t } from 'i18next';
import Sidebar25 from '../components/Sidebar25';
import Footer from '../components/Footer';

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
				<div className="w-75 align-items-center justify-content-center mx-auto">
					<div className="container px-5">
						<h3 className="fw-bold fs-2 text-center mb-5">{t('createProject.letsStartTesting')}</h3>
						<div class="d-flex justify-content-center">
							<form className="adaptedForm" onSubmit={handleSubmit}>
								<h4>{t('createProject.aboutProject')}</h4>
								<div>
									<p className="mt-5 mb-0">{t('createProject.projectName')}:</p>
									<input name="projectName" value={form.projectName} onChange={handleChange} required />
								</div>
								<div>
									<p className="mt-3 mb-0">Description:</p>
									<input name="description" value={form.description} onChange={handleChange} required />
								</div>
								<div>
									<p className="mt-3 mb-0">Email:</p>
									<input name="email" value={form.email} onChange={handleChange} required />
								</div>
								<div>
									<p className="mt-3 mb-0">Product:</p>
									<input name="product" value={form.product} onChange={handleChange} required />
								</div>
								<div>
									<p className="mt-3 mb-0">Start date:</p>
									<input type="date" name="startDate" value={form.startDate} onChange={handleChange} required />
								</div>
								<div>
									<p className="mt-3 mb-0">End date:</p>
									<input type="date" name="endDate" value={form.endDate} onChange={handleChange} required />
								</div>
								<div>
									<p className="mt-3 mb-0">Test type:</p>
									<select name="testType" value={form.testType} onChange={handleChange} required>
										<option value="" disabled>Select test type</option>
										<option value="manual">Manual</option>
										<option value="automated">Automated</option>
									</select>
								</div>
								<div className="d-flex justify-content-end mt-4">
									<button type="submit">NEXT</button>
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
