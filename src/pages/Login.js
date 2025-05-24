import React, { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import AuthLayout from '../components/AuthLayout';
import { login } from '../services/authService';
import LinkInLoginsRegisters from '../components/LinkInLoginsRegisters';

export default function Login() {
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	function AboutPage() {
		useEffect(() => {
		document.title = "Login - Nextest";
		}, []);
	
		return <h1>About</h1>;
	}	

	const recaptchaRef = React.useRef();

	const handleChange = (token) => {
		console.log("Token del captcha:", token);
		// Envíalo a tu backend para verificación
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setSuccess(false);
	
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userId)) {
			return setError('Introduce un correo electrónico válido');
		}

		const objectToSend = {
			email: userId,
			password: password
		}
	
		try {
			const result = await login(objectToSend);
			console.log('Login OK:', result);
			setSuccess(true);
			// Aquí podrías redirigir o guardar el token
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div class="d-flex vh-100">
			<AuthLayout />
			<div class="w-50 align-items-center justify-content-center">
				<div class="container px-5">
					<LinkInLoginsRegisters
						text="Don't have an account?" 
						url="/register-client" 
						linkText="Register" 
					/>
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

							<div class="d-flex align-items-center gap-2 mt-3">
								<input
								type="checkbox"
								id="remember"
								value={rememberMe}
								/>
								<label htmlFor="remember">Recordar mi sesión</label>
							</div>

							<LinkInLoginsRegisters
								text="Have you forgoten your password?"
								url="/reset-password"
								linkText="Reset Password"
							/>

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
