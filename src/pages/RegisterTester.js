import React, { useState } from 'react';
import AuthLayout from '../components/AuthLayout';

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

	const handleSubmit = (e) => {
		e.preventDefault();
		if (new Date(form.nacimiento) > new Date(Date.now() - 568025136000)) {
			return alert('Debes tener al menos 18 años.');
		}
		console.log('Tester registrado:', form);
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
		<div className="d-flex vh-100">
			<AuthLayout />
			<div className="w-50 align-items-center justify-content-center">
				<div className="container px-5">
					<div className="mb-5">
						<p className="text-end">
							Already have an account?
							<a href="/login" className="ms-2 text-dark fw-bold">Sign In</a>
						</p>
					</div>
					<div>
						<h3 className="fw-bold fs-2 text-center mb-5">You're starting something new, let's make it a way of life ;-)</h3>
					</div>
					<div>
						<form onSubmit={handleSubmit}>
							{step === 1 && (
								<>
									<h4>About yourself...</h4>
									<div>
										<p>First name:</p>
										<input name="name" placeholder="name..." value={form.name} onChange={handleChange} required />
									</div>
									<div>
										<p>Last name:</p>
										<input name="lastName" placeholder="last name..." value={form.lastName} onChange={handleChange} required />
									</div>
									<div>
										<p>Email:</p>
										<input name="email" placeholder="email..." value={form.email} onChange={handleChange} required />
									</div>
									<div>
										<p>Languages:</p>
										<input name="email" placeholder="languages..." value={form.email} onChange={handleChange} required />
									</div>
									<div>
										<p>Date of Birth:</p>
										<input name="email" type="date" placeholder="birth..." value={form.email} onChange={handleChange} required />
									</div>
									<div class="d-flex justify-content-end">
										<button type="button" class="mt-5" onClick={nextStep}>Next</button>
									</div>
								</>
							)}
							{step === 2 && (
								<>
									<h4>Where you're living...</h4>
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
	);
}
