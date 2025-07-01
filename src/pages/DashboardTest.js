import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePageTitle } from '../hooks/usePageTitle';

export default function DashboardTest() {
	const { t } = useTranslation();

	usePageTitle('dashboard.title');

	return (
		<div>
			<div style={{ padding: '2rem' }}>
				<h1>{t('dashboard.bienvenido')}</h1>
				<p>Aquí podrás ver el resumen de tu Proyecto de Testing</p>

				{/* Aquí puedes meter widgets, estadísticas, etc. */}
				<div style={{ marginTop: '2rem' }}>
					<h2>Resumen</h2>
					<ul>
						<li>Inicio del Proyecto: 21/05/2025</li>
						<li>Entrega del Proyecto: 24/07/2025</li>
					</ul>
				</div>

			</div>
		</div>
	);
}
