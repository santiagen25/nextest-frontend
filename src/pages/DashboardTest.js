import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePageTitle } from '../hooks/usePageTitle';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
} from 'chart.js';

ChartJS.register(
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	BarElement,
	Title
);

export default function DashboardTest() {
	const { t } = useTranslation();
	usePageTitle('dashboard.title');

	const data = {
		labels: [t('dashboard.aprobados'), t('dashboard.fallidos')],
		datasets: [
			{
				label: t('dashboard.casosDePrueba'),
				data: [68, 8],
				backgroundColor: ['#198754', '#dc3545'],
				borderWidth: 1,
			},
		],
	};

	const bugsPorModulo = {
		labels: [t('dashboard.login'), t('dashboard.title'), t('dashboard.api'), t('dashboard.baseDeDatos'), t('dashboard.mobile')],
		datasets: [
			{
				label: t('dashboard.bugsEncontrados'),
				data: [3, 5, 2, 4, 1],
				backgroundColor: '#0d6efd',
			},
		],
	};

	return (
		<div>
			<div style={{ padding: '2rem' }}>
				<h1>{t('dashboard.bienvenido')}</h1>
				<p>{t('dashboard.aquiPodrasVerElResumen')}</p>

				<div className="d-flex justify-content-between">
					<div style={{ minWidth: '25vw', maxWidth: '30vw', marginTop: '2rem' }}>
						<h2>{t('dashboard.estadoDeCasosDePrueba')}</h2>
						<Doughnut data={data} />
					</div>

					<div style={{ minWidth: '30vw', maxWidth: '40vw', marginTop: '2rem' }}>
						<h2>{t('dashboard.bugsPorModulo')}</h2>
						<Bar data={bugsPorModulo} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: t('dashboard.distribucionDeBugs') } } }} />
					</div>
				</div>

				<div className="d-flex justify-content-between" style={{ marginTop: '8rem' }}>
					<div>
						<h2>{t('dashboard.resumen')}</h2>
						<ul>
							<li>{t('dashboard.inicioDelProyecto')}: 21/05/2025</li>
							<li>{t('dashboard.entregaDelProyecto')}: 24/07/2025</li>
							<li>{t('dashboard.cliente')}: TechCorp Solutions S.A.</li>
							<li>{t('dashboard.responsableQA')}: Santiago Torrabadella</li>
							<li>{t('dashboard.tipoDePruebas')}: Funcionales, Regresión, Integración</li>
							<li>{t('dashboard.casosDePruebaTotales')}: 128</li>
							<li>{t('dashboard.casosDePruebaEjecutados')}: 76</li>
							<li>{t('dashboard.casosDePruebaAprobados')}: 68</li>
							<li>{t('dashboard.casosDePruebaFallidos')}: 8</li>
							<li>{t('dashboard.bugsAbiertos')}: 5</li>
							<li>{t('dashboard.bugsCerrados')}: 12</li>
							<li>{t('dashboard.ultimaEjecucion')}: 30/06/2025</li>
						</ul>
					</div>

					<div>
						<h2 className="mt-4">{t('dashboard.indicadores')}</h2>
						<ul>
							<li>{t('dashboard.porcentajeDeCobertura')}: 59%</li>
							<li>{t('dashboard.productividadDelEquipoQA')}: Alta</li>
							<li>{t('dashboard.prioridadDeBugs')}: 2 críticos, 3 menores</li>
							<li>{t('dashboard.horasDedicadasQA')}: 240h</li>
						</ul>

						<h2 className="mt-4">{t('dashboard.proximosHitos')}</h2>
						<ul>
							<li>{t('dashboard.revisionDeRequisitos')}: 05/07/2025</li>
							<li>{t('dashboard.pruebasdeRegresionFinal')}: 15/07/2025</li>
							<li>{t('dashboard.informeFinalDeQA')}: 22/07/2025</li>
						</ul>
					</div>

				</div>
			</div>
		</div>
	);
}
