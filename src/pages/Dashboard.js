// src/pages/Dashboard.js
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
	const { t, i18n } = useTranslation();

	return (
		<div style={{ padding: '2rem' }}>
			<h1>Bienvenido al Dashboard</h1>
			<p>Aquí podrás ver el resumen de tu actividad.</p>

			{/* Aquí puedes meter widgets, estadísticas, etc. */}
			<div style={{ marginTop: '2rem' }}>
				<h2>Resumen</h2>
				<ul>
					<li>Sesiones activas: 3</li>
					<li>Último acceso: 21/05/2025</li>
					<li>Notificaciones: 5 nuevas</li>
				</ul>
			</div>

			<div>
				<button onClick={() => i18n.changeLanguage('en')}>English</button>
				<button onClick={() => i18n.changeLanguage('es')}>Español</button>
			</div>
		</div>
	);
}
