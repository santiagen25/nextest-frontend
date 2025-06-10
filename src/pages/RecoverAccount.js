import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import LinkInLoginsRegisters from '../components/LinkInLoginsRegisters';
import AuthLayout from '../components/AuthLayout';
import ReCAPTCHA from 'react-google-recaptcha';
import { usePageTitle } from '../hooks/usePageTitle';

export default function RecoverAccount() {
	const { t } = useTranslation();
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [captchaVerified, setCaptchaVerified] = useState(false);
	const [error, setError] = useState('');
	const recaptchaRef = React.useRef();

	usePageTitle('recoverAccount.title');

	const handleChange = (token) => {
		console.log("Token del captcha:", token);
		setCaptchaVerified(!!token);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage('');
		setError('');

		if (!captchaVerified) {
			return setError('Por favor, completa el reCAPTCHA.');
		}

		try {
			const res = await fetch('/api/auth/request-reset', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			});
			const data = await res.json();
			if (res.ok) {
				setMessage(t('recoverAccount.teHemosEnviadoUnEnlace'));
			} else {
				setMessage(data.error || t('recoverAccount.errorAlEnviar'));
			}
		} catch (err) {
			setMessage(t('recoverAccount.errorRed'));
		}
	};

	return (
		<div>
			<div className="d-flex vh-100">
				<AuthLayout />
				<div className="w-50 vh-100 d-flex justify-content-center align-items-center">
					<div className="text-center">
						<h2>{t('recoverAccount.tituloRecuperar')}</h2>
						<form onSubmit={handleSubmit}>
							<label className="mt-5 mb-1">{t('recoverAccount.introduceEmail')}:</label>
							<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
							<div className="d-flex justify-content-center mt-3">
								<ReCAPTCHA
									sitekey="6LdCp1YrAAAAAK8qv6EJpVFnMDyREBsUh6mOZvzq"
									onChange={handleChange}
									ref={recaptchaRef}
								/>
							</div>
							<button className={`mt-3 ${!captchaVerified ? 'buttonDisabled' : ''}`}
								title={`${!captchaVerified ? t('login.completeRecaptcha') : ''}`}
								type="submit" disabled={!captchaVerified}>
								{t('recoverAccount.enviarEnlace')}
							</button>
						</form>
						{error && <p style={{ color: 'red' }}>{error}</p>}
						{message && <p>{message}</p>}
						<LinkInLoginsRegisters
							text={t('recoverAccount.irAlLogin')}
							url="/login"
							linkText={t('registerClient.login')}
							classParent={"mt-5 d-flex justify-content-center"}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
