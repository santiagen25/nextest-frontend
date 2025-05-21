import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import AuthLayout from '../components/AuthLayout';

export default function Login() {
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
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
							<h4>Accede a tu cuenta</h4>

							<div>
								<label>Email:</label>
								<input
								type="email"
								name="email"
								required
								value={userId}
								onChange={(e) => setUserId(e.target.value)}
								/>
							</div>

							<div>
								<label>Contraseña:</label>
								<input
								type="password"
								name="password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<div>
								<input
								type="checkbox"
								id="remember"
								/>
								<label htmlFor="remember">Recordar mi sesión</label>
							</div>

							<div>
								<a href="/recuperar-cuenta">¿Has olvidado tu contraseña?</a>
							</div>

							<div className="d-flex justify-content-center mt-3">
								<ReCAPTCHA
								sitekey="TU_SITE_KEY"
								onChange={handleChange}
								ref={recaptchaRef}
								/>
							</div>

							<div className="d-flex justify-content-end mt-4">
								<button type="submit">Entrar</button>
							</div>

							{error && <p style={{ color: 'red' }}>{error}</p>}
						</form>

						{error && <p style={{ color: 'red' }}>{error}</p>}
						{success && <p style={{ color: 'green' }}>¡Cuenta creada con éxito!</p>}
					</div>
				</div>
			</div>
		</div>
	);
}
