import React, { useState } from 'react';
import { registerClient } from '../services/authService';
import AuthLayout from '../components/AuthLayout';
import LinkInLoginsRegisters from '../components/LinkInLoginsRegisters';
import { t } from 'i18next';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';

export default function RegisterClient() {
	const [step, setStep] = useState(1);
	const [form, setForm] = useState({
		name: '',
		lastName: '',
		email: '',
		companyName: '',
		companyAddress: '',
		companyId: ''
	});

	usePageTitle('registerClient.title');

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);

	const handleSubmit = async () => {
		try {
			await registerClient(form);
			console.log("datos enviados");
		} catch (error) {
			alert("error al enviar datos");
		}
	};

	return (
		<div>
			<div className="d-flex vh-100">
				<AuthLayout />
				<div className="w-50 align-items-center justify-content-center">
					<div className="container px-5">
						<LinkInLoginsRegisters
							text={t('registerClient.eresTester?')}
							url="/register-tester"
							linkText={t('registerClient.registrarTester')}
							classParent={""}
						/>
						<LinkInLoginsRegisters
							text={t('registerClient.eresCliente?')}
							url="/login"
							linkText={t('registerClient.login')}
							classParent={"mb-5"}
						/>
						<div>
							<h3 className="fw-bold fs-2 text-center mb-5">{t('general.yourestarting')}</h3>
						</div>
						<div>
							<form onSubmit={handleSubmit}>
								{step === 1 && (
									<>
										<h4>{t('registerClient.aboutYourself')}</h4>
										<div>
											<p>{t('registerClient.nombre')}:</p>
											<input name="name" placeholder={`${t('registerClient.nombre')}...`} value={form.name} onChange={handleChange} required />
										</div>
										<div>
											<p>{t('registerClient.apellidos')}:</p>
											<input name="lastName" placeholder={`${t('registerClient.apellidos')}...`} value={form.lastName} onChange={handleChange} required />
										</div>
										<div>
											<p>{t('registerClient.email')}:</p>
											<input name="email" placeholder={`${t('registerClient.email')}...`} value={form.email} onChange={handleChange} required />
										</div>
										<div className="d-flex justify-content-end">
											<button type="button" className="mt-5" onClick={nextStep}>{t('registerClient.siguiente')}</button>
										</div>
									</>
								)}
								{step === 2 && (
									<>
										<h4>{t('registerClient.sobreTuEmpresa')}</h4>
										<div className="mt-3">
											<p>{t('registerClient.nombreEmpresa')}:</p>
											<input name="companyName" placeholder={`${t('registerClient.nombreEmpresa')}...`} value={form.companyName} onChange={handleChange} required />
										</div>
										<div className="mt-3">
											<p>{t('registerClient.direccionEmpresa')}:</p>
											<input name="companyAddress" placeholder={`${t('registerClient.direccionEmpresa')}...`} value={form.companyAddress} onChange={handleChange} required />
										</div>
										<div className="mt-3">
											<p>{t('registerClient.nif')}:</p>
											<input name="companyId" placeholder={`${t('registerClient.nif')}...`} value={form.companyId} onChange={handleChange} required />
										</div>
										<div className="d-flex justify-content-between mt-3">
											<button type="button" className="text-uppercase" onClick={prevStep}>{t('registerClient.atras')}</button>
											<button type="submit" className="text-uppercase">{t('registerClient.enviar')}</button>
										</div>
									</>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
