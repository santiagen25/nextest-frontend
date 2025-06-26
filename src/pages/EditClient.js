import React, { useEffect, useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import Footer from '../components/Footer';
import { t } from 'i18next';
import { getClientProfile, updateClientProfile } from '../services/profileService';
import { usePageTitle } from '../hooks/usePageTitle';

export default function EditClient() {
	usePageTitle('editClient.title');

	const [form, setForm] = useState({
		name: '',
		lastName: '',
		email: '',
		companyName: '',
		companyAddress: '',
		companyId: ''
	});

	useEffect(() => {
		const fetchData = async () => {
			const data = await getClientProfile(); // <-- función que trae los datos del backend
			setForm(data);
		};
		fetchData();
	}, []);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await updateClientProfile(form); // <-- función para actualizar en backend
			alert(t('editClient.success'));
		} catch (err) {
			alert(t('editClient.error'));
		}
	};

	return (
		<div>
			<div className="d-flex vh-100">
				<AuthLayout />
				<div className="w-50 align-items-center justify-content-center">
					<div className="container px-5">
						<h3 className="fw-bold fs-2 text-center mb-5">{t('editClient.title')}</h3>
						<form onSubmit={handleSubmit}>
							<h4>{t('editClient.personalInfo')}</h4>
							<div>
								<p>{t('registerClient.nombre')}:</p>
								<input name="name" value={form.name} onChange={handleChange} required />
							</div>
							<div>
								<p>{t('registerClient.apellidos')}:</p>
								<input name="lastName" value={form.lastName} onChange={handleChange} required />
							</div>
							<div>
								<p>{t('registerClient.email')}:</p>
								<input name="email" value={form.email} onChange={handleChange} required />
							</div>
							<h4 className="mt-4">{t('registerClient.sobreTuEmpresa')}</h4>
							<div>
								<p>{t('registerClient.nombreEmpresa')}:</p>
								<input name="companyName" value={form.companyName} onChange={handleChange} required />
							</div>
							<div>
								<p>{t('registerClient.direccionEmpresa')}:</p>
								<input name="companyAddress" value={form.companyAddress} onChange={handleChange} required />
							</div>
							<div>
								<p>{t('registerClient.nif')}:</p>
								<input name="companyId" value={form.companyId} onChange={handleChange} required />
							</div>
							<div className="d-flex justify-content-end mt-4">
								<button type="submit" className="text-uppercase">{t('editClient.guardarCambios')}</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
