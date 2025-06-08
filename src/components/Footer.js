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
				<a href="#soluciones">{t('footer.soluciones')}</a>
				<a href="#contacto">{t('footer.contactanos')}</a>
			</div>
			<div className="footer-right">
				<p>{t('footer.followUs')}</p>
				<a href="https://linkedin.com" target="_blank" rel="noreferrer">
					<i className="fa fa-linkedin"></i> LinkedIn
				</a>
				<select onChange={handleChangeLanguage} className="lang-select">
					<option value="es">🇪🇸 {t('general.español')}</option>
					<option value="en">🇬🇧 {t('general.ingles')}</option>
					<option value="ca">{t('general.catalan')}</option>
				</select>
			</div>
		</footer>
	);
};

export default Footer;
