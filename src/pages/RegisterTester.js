import React, { useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import { registerTester } from '../services/authService';
import LinkInLoginsRegisters from '../components/LinkInLoginsRegisters';
import { t } from 'i18next';
import Footer from '../components/Footer';

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
		'Testing manual y exploratorio',
		'Testing automatizado',
		'Testing IA',
		'Testing de ciberseguridad',
		'Testing de rendimiento',
		'Testing de API / microservicios',
		'Testing de apps de móvil',
		'Behavior Driven Development',
		'Test Driven Development',
	];

	return (
		<div>
			<div className="d-flex vh-100">
				<AuthLayout />
				<div className="w-50 align-items-center justify-content-center">
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
										<div>
											<p>{t('registerTester.idiomas')}:</p>
											<input name="email" placeholder={`${t('registerTester.idiomas')}...`} value={form.email} onChange={handleChange} required />
										</div>
										<div>
											<p>{t('registerTester.nacimiento')}:</p>
											<input name="email" type="date" placeholder={`${t('registerTester.nacimiento')}...`} value={form.email} onChange={handleChange} required />
										</div>
										<div class="d-flex justify-content-end">
											<button type="button" className="mt-5 text-uppercase" onClick={nextStep}>{t('registerClient.next')}</button>
										</div>
									</>
								)}
								{step === 2 && (
									<>
										<h4>{t('registerTester.dondeVives')}...</h4>
										<div>
											<p>City:</p>
											<input name="name" placeholder="city..." value={form.name} onChange={handleChange} required />
										</div>
										<div>
											<p>Post Code:</p>
											<input name="lastName" placeholder="code..." value={form.lastName} onChange={handleChange} required />
										</div>
										<div>
											<p>Contry:</p>
											<input name="email" placeholder="Contry..." value={form.email} onChange={handleChange} required />
										</div>
										<div className="d-flex justify-content-end mt-5">
											<button type="button" onClick={prevStep}>Back</button>
											<button type="button" onClick={nextStep}>Next</button>
										</div>
									</>
								)}
								{step === 3 && (
									<>
										<h4>Your experience...</h4>
										<label>Experiencia:</label><br />
										{['Sin experiencia', 'Menos de 2 años', '3 – 5 años', '6 – 10 años', 'Más de 10 años'].map((exp) => (
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
										))}<br />
										<div className="d-flex justify-content-end mt-5">
											<button type="button" onClick={prevStep}>Atrás</button>
											<button type="button" onClick={nextStep}>Siguiente</button>
										</div>
									</>
								)}
								{step === 4 && (
									<>
										<label>Intereses:</label><br />
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
											<p>What tools are you proficient?</p>
											<textarea type="text" name="herramientas" placeholder="Tools..." value={form.name} onChange={handleChange} required></textarea>
										</div>
										<div className="mt-3">
											<p>What languages are you proficient?</p>
											<textarea type="text" name="lenguajes" placeholder="Tools..." value={form.name} onChange={handleChange} required></textarea>
										</div>
										<div className="d-flex justify-content-end mt-5">
											<button type="button" onClick={prevStep}>Atrás</button>
											<button type="submit">Finalizar</button>
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
