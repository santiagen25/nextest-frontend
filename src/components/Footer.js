import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t, i18n } = useTranslation();

	const handleChangeLanguage = (e) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
		<footer className="footer">
			<div className="footer-left">
				<p className="brand">nextest by NEXO QA</p>
				<a href="login">{t('login.title')}</a>
				<a href="testing-process">{t('dashboard.title')}</a>
			</div>
			<div className="footer-right">
				<p>{t('footer.followUs')}:</p>
				<a href="https://linkedin.com" target="_blank" rel="noreferrer">
					<i className="fa fa-linkedin"></i> LinkedIn
				</a>
				<select
					onChange={handleChangeLanguage}
					className="form-select"
					value={i18n.language}
				>
					<option value="es">🇪🇸 {t('general.español')}</option>
					<option value="en">🇬🇧 {t('general.ingles')}</option>
					<option value="ca">🎗️ {t('general.catalan')}</option>
				</select>

			</div>
		</footer>
	);
};

export default Footer;
