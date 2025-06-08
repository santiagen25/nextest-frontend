import React, { useState } from 'react';
import { t } from 'i18next';
import Sidebar25 from '../components/Sidebar25';

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
		<div className="d-flex vh-100">
			<Sidebar25 />
			<div className="w-75 align-items-center justify-content-center mx-auto">
				<div className="container px-5">
					<h3 className="fw-bold fs-2 text-center mb-5">{t('createProject.letsStartTesting')}</h3>
					<form className="" onSubmit={handleSubmit}>
						<h4>{t('createProject.aboutProject')}</h4>
						<div>
							<p>{t('createProject.projectName')}:</p>
							<input name="projectName" value={form.projectName} onChange={handleChange} required />
						</div>
						<div>
							<p>Description:</p>
							<input name="description" value={form.description} onChange={handleChange} required />
						</div>
						<div>
							<p>Email:</p>
							<input name="email" value={form.email} onChange={handleChange} required />
						</div>
						<div>
							<p>Product:</p>
							<input name="product" value={form.product} onChange={handleChange} required />
						</div>
						<div>
							<p>Start date:</p>
							<input type="date" name="startDate" value={form.startDate} onChange={handleChange} required />
						</div>
						<div>
							<p>End date:</p>
							<input type="date" name="endDate" value={form.endDate} onChange={handleChange} required />
						</div>
						<div>
							<p>Test type:</p>
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
	);
}
