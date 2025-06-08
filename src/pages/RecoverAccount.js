import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import LinkInLoginsRegisters from '../components/LinkInLoginsRegisters';

export default function RecoverAccount() {
	const { t } = useTranslation();
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage('');
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
			<div className="vh-100 d-flex justify-content-center align-items-center">
				<div className="text-center">
					<h2>{t('recoverAccount.tituloRecuperar')}</h2>
					<form onSubmit={handleSubmit}>
						<label className="mt-5 mb-1">{t('recoverAccount.introduceEmail')}:</label>
						<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
						<button className="mt-3" type="submit">{t('recoverAccount.enviarEnlace')}</button>
					</form>
					{message && <p>{message}</p>}
					<LinkInLoginsRegisters
						text={t('recoverAccount.irAlLogin')}
						url="/login"
						linkText={t('registerClient.login')}
						classParent={"mt-5 d-flex justify-content-center"}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
