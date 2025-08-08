import React, { useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import { registerTester } from '../services/authService';
import LinkInLoginsRegisters from '../components/LinkInLoginsRegisters';
import { t } from 'i18next';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';

export default function RegisterTester() {
	const [step, setStep] = useState(1);
	const [form, setForm] = useState({
		nombre: '',
		apellidos: '',
		email: '',
		idiomas: [],
		nacimiento: '',
		ciudad: '',
		cp: '',
		pais: '',
		experiencia: '',
		intereses: [],
		herramientas: '',
		lenguajes: '',
	});
	const [setError] = useState('');
	const [setSuccess] = useState(false);

	usePageTitle('registerTester.title');

	const toggleInteres = (interes) => {
		setForm((prev) => ({
			...prev,
			intereses: prev.intereses.includes(interes)
				? prev.intereses.filter((i) => i !== interes)
				: [...prev.intereses, interes],
		}));
	};

	console.log("")

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (new Date(form.nacimiento) > new Date(Date.now() - 568025136000)) {
			return alert('Debes tener al menos 18 años.');
		}
		console.log('Tester registrado:', form);

		const objectToSend = {
			email: form.email,
			password: form.password,
			experience: undefined
		}

		try {
			const result = await registerTester(objectToSend);
			console.log('Login OK:', result);
			setSuccess(true);
			// Aquí podrías redirigir o guardar el token
		} catch (err) {
			setError(err.message);
		}
	};

	const intereses = [
		`${t('registerTester.testingManualYExploratorio')}`,
		`${t('registerTester.testingAutomatizado')}`,
		`${t('registerTester.testingIA')}`,
		`${t('registerTester.testingCiber')}`,
		`${t('registerTester.testingRendi')}`,
		`${t('registerTester.testingApiMicro')}`,
		`${t('registerTester.testingApps')}`,
		`${t('registerTester.bdd')}`,
		`${t('registerTester.tdd')}`
	];

	return (
		<div>
			<div className="d-flex vh-100">
				<AuthLayout />
				<div className="flex-fill d-flex align-items-center justify-content-center">
					<div className="container px-5">
						<LinkInLoginsRegisters
							text="Are you a Client?"
							url="/register-client"
							linkText="Register as Client"
							classParent={""}
						/>
						<LinkInLoginsRegisters
							text="Already have an account?"
							url="/login"
							linkText="Login"
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
										<div className="mb-3">
											<label className="form-label">{t('registerClient.nombre')}:</label>
											<input className="form-control" name="name" placeholder={`${t('registerClient.nombre')}...`} value={form.name} onChange={handleChange} required />
										</div>
										<div className="mb-3">
											<label className="form-label">{t('registerClient.apellidos')}:</label>
											<input className="form-control" name="lastName" placeholder={`${t('registerClient.apellidos')}...`} value={form.lastName} onChange={handleChange} required />
										</div>
										<div className="mb-3">
											<label className="form-label">{t('registerClient.email')}:</label>
											<input className="form-control" name="email" placeholder={`${t('registerClient.email')}...`} value={form.email} onChange={handleChange} required />
										</div>
										<div className="mb-3">
											<label className="form-label">{t('registerTester.idiomas')}:</label>
											<input className="form-control" name="email" placeholder={`${t('registerTester.idiomas')}...`} value={form.email} onChange={handleChange} required />
										</div>
										<div className="mb-3">
											<label className="form-label">{t('registerTester.nacimiento')}:</label>
											<input className="form-control" name="email" type="date" placeholder={`${t('registerTester.nacimiento')}...`} value={form.email} onChange={handleChange} required />
										</div>
										<div className="d-flex justify-content-end">
											<button type="button" className="mt-5 text-uppercase" onClick={nextStep}>{t('registerClient.siguiente')}</button>
										</div>
									</>
								)}
								{step === 2 && (
									<>
										<h4>{t('registerTester.dondeVives')}...</h4>
										<div>
											<label className="form-label">{t('registerTester.ciudad')}:</label>
											<input className="form-control" name="name" placeholder="city..." value={form.name} onChange={handleChange} required />
										</div>
										<div>
											<label className="form-label">{t('registerTester.codigoPostal')}:</label>
											<input className="form-control" name="lastName" placeholder="code..." value={form.lastName} onChange={handleChange} required />
										</div>
										<div>
											<label className="form-label">{t('registerTester.pais')}:</label>
											<input className="form-control" name="email" placeholder="Contry..." value={form.email} onChange={handleChange} required />
										</div>
										<div className="d-flex justify-content-end mt-5">
											<button type="button" onClick={prevStep} className="text-uppercase">{t('registerTester.atras')}</button>
											<button type="button" onClick={nextStep} className="text-uppercase">{t('registerClient.siguiente')}</button>
										</div>
									</>
								)}
								{step === 3 && (
									<>
										<h4>{t('registerTester.tuExperiencia')}</h4>
										<label>{t('registerTester.experiencia')}:</label>
										{[`${t('registerTester.sinExperiencia')}`, `${t('registerTester.menosDe2Años')}`, `${t('registerTester.3a5Años')}`, `${t('registerTester.6a10Años')}`, `${t('registerTester.masDe10Años')}`].map((exp) => (
											<div className="form-check" key={exp}>
												<label className="form-check-label">
													<input
														className="form-check-input"
														type="radio"
														name="experiencia"
														value={exp}
														checked={form.experiencia === exp}
														onChange={handleChange}
													/>
													{exp}
												</label>
											</div>
										))}
										<div className="d-flex justify-content-end mt-5">
											<button type="button" onClick={prevStep} className="text-uppercase">{t('registerTester.atras')}</button>
											<button type="button" onClick={nextStep} className="text-uppercase">{t('registerClient.siguiente')}</button>
										</div>
									</>
								)}
								{step === 4 && (
									<>
										<label className="form-check-label">{t('registerTester.intereses')}:</label>
										{intereses.map((item) => (
											<div className="form-check" key={item}>
												<input
													className="form-check-input"
													type="checkbox"
													checked={form.intereses.includes(item)}
													onChange={() => toggleInteres(item)}
													id={item}
												/>
												<label className="form-check-label" htmlFor={item}>
													{item}
												</label>
											</div>
										))}

										<div className="mt-3">
											<label className="form-label">{t('registerTester.enQueHerramientasEres')}</label>
											<textarea className="form-control" type="text" name="herramientas" placeholder={`${t('registerTester.herramientas')}...`} value={form.name} onChange={handleChange} required></textarea>
										</div>
										<div className="mt-3">
											<label className="form-label">{t('registerTester.enQueIdiomasEres')}</label>
											<textarea className="form-control" type="text" name="lenguajes" placeholder={`${t('registerTester.herramientas')}...`} value={form.name} onChange={handleChange} required></textarea>
										</div>
										<div className="d-flex justify-content-end mt-5">
											<button type="button" onClick={prevStep} className="text-uppercase">{t('registerTester.atras')}</button>
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
