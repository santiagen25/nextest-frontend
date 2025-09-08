import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import AuthLayout from '../components/AuthLayout';
import { login } from '../services/authService';
import LinkInLoginsRegisters from '../components/LinkInLoginsRegisters';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Login() {
	const { t } = useTranslation();
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState('');
	const [error, setError] = useState('');
	const [, setSuccess] = useState(false);
	const [captchaVerified, setCaptchaVerified] = useState(false);
	const navigate = useNavigate();

	const recaptchaRef = React.useRef();

	usePageTitle('login.title');

	const handleChange = (token) => {
		console.log("Token del captcha:", token);
		setCaptchaVerified(!!token);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setSuccess(false);

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userId)) {
			return setError('Introduce un correo electrónico válido');
		}

		if (!captchaVerified) {
			return setError(t('login.completeRecaptcha'));
		}

		const objectToSend = {
			email: userId,
			password: password
		}

		try {
			const result = await login(objectToSend);

			if (!result.ok) return setError(result.message || 'No autorizado');

			// 3) éxito real
			if (!result.token) return setError('Falta token en la respuesta');
			localStorage.setItem('token', result.token);
			setSuccess(true);
			navigate('/testing-process');
		} catch (err) {
			setError(err.message || 'Error inesperado');
		}

	};

	return (
		<div>
			<div className="d-flex vh-100">
				<AuthLayout />
				<div className="flex-fill d-flex align-items-center justify-content-center">
					<div className="mt-5 px-5">
						<LinkInLoginsRegisters
							text={t('login.noTienesCuenta?')}
							url="/register-client"
							linkText={t('login.registrarse')}
							classParent={"mb-5"}
						/>
						<div>
							<h3 className="fw-bold fs-2 text-center mb-5">{t('general.yourestarting')}</h3>
						</div>
						<div>
							<form onSubmit={handleSubmit}>
								<h4>{t('login.accedeatucuenta')}</h4>

								<div className="mt-3">
									<label className="form-label">{t('login.email')}:</label>
									<input
										className="form-control"
										type="email"
										name="email"
										required
										value={userId}
										onChange={(e) => setUserId(e.target.value)}
									/>
								</div>

								<div className="mt-3">
									<label className="form-label">{t('login.passwd')}:</label>
									<input
										className="form-control"
										type="password"
										name="password"
										required
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>

								<div className="d-flex justify-content-center form-check mt-4">
									<input
										className="form-check-input"
										type="checkbox"
										id="remember"
										checked={rememberMe}
										onChange={(e) => setRememberMe(e.target.checked)}
									/>
									<label className="form-check-label ms-2" htmlFor="remember">
										{t('login.recordarme')}
									</label>
								</div>

								<LinkInLoginsRegisters
									text={t('login.passwdOlvidada')}
									url="/reset-password"
									linkText={t('login.resetpasswd')}
									classParent={"mb-5 mt-4 d-flex justify-content-center"}
								/>

								<div className="d-flex justify-content-center mt-3">
									<ReCAPTCHA
										sitekey="6LdCp1YrAAAAAK8qv6EJpVFnMDyREBsUh6mOZvzq"
										onChange={handleChange}
										ref={recaptchaRef}
									/>
								</div>

								<div className="d-flex justify-content-end mt-4">
									<button type="submit" disabled={!captchaVerified}
										className={`text-uppercase ${!captchaVerified ? 'buttonDisabled' : ''}`}
										title={`${!captchaVerified ? t('login.completeRecaptcha') : ''}`}>
										{t('login.entrar')}
									</button>
								</div>
							</form>
							{error && <p style={{ color: 'red' }}>{error}</p>}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
