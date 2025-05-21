import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import AuthLayout from '../components/AuthLayout';

export default function Register() {
	const [userId] = useState('');
	const [password] = useState('');
	const [confirmPassword] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	const recaptchaRef = React.useRef();

	const handleChange = (token) => {
		console.log("Token del captcha:", token);
		// Envíalo a tu backend para verificación
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');
		setSuccess(false);

		if (!/^[a-zA-Z0-9]+$/.test(userId)) {
			return setError('La ID solo puede contener letras y números');
		}

		if (password !== confirmPassword) {
			return setError('Las contraseñas no coinciden');
		}

		if (password.length < 8) {
			return setError('La contraseña debe tener al menos 8 caracteres');
		}

		// Aquí iría lógica CAPTCHA, rate limiting, email confirm, etc.
		console.log('Cuenta creada:', { userId, password });
		setSuccess(true);
	};

	return (
		<div class="d-flex vh-100">
			<AuthLayout />
			<div class="w-50 align-items-center justify-content-center">
				<div class="container px-5">
					<div class="mb-5">
						<p class="text-end">
							Already have an account?
							<a href="/login" class="ms-2 text-dark fw-bold">Sign In</a>
						</p>
					</div>
					<div>
						<h3 class="fw-bold fs-2 text-center mb-5">You're starting something new, let's make it a way of life ;-)</h3>
					</div>
					<div>
						<form onSubmit={handleSubmit}>
							<h4>About yourself...</h4>
							<div>
								<p>First name:</p>
								<input name="name" placeholder="name..." required />
							</div>
							<div>
								<p>Last name:</p>
								<input name="lastName" placeholder="last name..." required />
							</div>
							<div>
								<p>email:</p>
								<input name="email" placeholder="email..." required />
							</div>
							<div className="d-flex justify-content-center mt-3">
								<ReCAPTCHA
									sitekey="TU_SITE_KEY"
									onChange={handleChange}
									ref={recaptchaRef}
								/>
							</div>
							<div class="d-flex justify-content-end mt-5">
								<button type="submit">Next</button>
							</div>
						</form>
						{error && <p style={{ color: 'red' }}>{error}</p>}
						{success && <p style={{ color: 'green' }}>¡Cuenta creada con éxito!</p>}
					</div>
				</div>
			</div>
		</div>
	);
}
