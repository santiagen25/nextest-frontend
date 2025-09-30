import React, { useEffect, useState } from 'react';
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

	const [dash, setDash] = useState(null);
	useEffect(() => {
		let ok = true;
		fetch('/mocks/dashboard.json').then(r => r.json()).then(d => ok && setDash(d));
		return () => { ok = false; };
	}, []);

	const cases = dash?.cases ?? { approved: 0, failed: 0, untested: 0 };
	const data = {
		labels: [t('dashboard.aprobados'), t('dashboard.fallidos'), t('dashboard.noTesteados')],
		datasets: [{ label: t('dashboard.casosDePrueba'), data: [cases.approved, cases.failed, cases.untested], backgroundColor: ['#198754', '#dc3545', '#fd7e14'], borderWidth: 1 }]
	};

	const bugs = dash?.bugsByModule ?? [];
	const bugsPorModulo = {
		labels: bugs.map(b => t(`dashboard.${b.moduleKey}`)),
		datasets: [{ label: t('dashboard.bugsEncontrados'), data: bugs.map(b => b.count), backgroundColor: '#0d6efd' }]
	};

	return (
		<div>
			<div style={{ padding: '2rem' }}>
				<h1>{t('dashboard.bienvenido')}</h1>
				<p>{t('dashboard.aquiPodrasVerElResumen')}</p>

				<div className="d-flex flex-column flex-md-row justify-content-between">
					<div style={{ minWidth: '25vw'}} className="graphs_width_1 w-100 w-md-25 mt-4">
						<h2>{t('dashboard.estadoDeCasosDePrueba')}</h2>
						<Doughnut data={data} />
					</div>

					<div style={{ minWidth: '30vw'}} className="graphs_width_2 w-100 w-md-40 mt-4">
						<h2>{t('dashboard.bugsPorModulo')}</h2>
						<Bar data={bugsPorModulo} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: t('dashboard.distribucionDeBugs') } } }} />
					</div>
				</div>

				<div className="d-flex flex-column flex-md-row justify-content-between" style={{ marginTop: '8rem' }}>
					<div>
						<h2>{t('dashboard.resumen')}</h2>
						<ul>
							<li>{t('dashboard.inicioDelProyecto')}: {dash?.summary?.startDate ?? '-'}</li>
							<li>{t('dashboard.entregaDelProyecto')}: {dash?.summary?.endDate ?? '-'}</li>
							<li>{t('dashboard.cliente')}: {dash?.summary?.client ?? '-'}</li>
							<li>{t('dashboard.responsableQA')}: {dash?.summary?.qaLead ?? '-'}</li>
							<li>{t('dashboard.tipoDePruebas')}: {(dash?.summary?.typesOfTests ?? []).join(', ')}</li>
							<li>{t('dashboard.casosDePruebaTotales')}: {dash?.summary?.totals?.totalCases ?? 0}</li>
							<li>{t('dashboard.casosDePruebaEjecutados')}: {dash?.summary?.totals?.executed ?? 0}</li>
							<li>{t('dashboard.casosDePruebaAprobados')}: {dash?.summary?.totals?.approved ?? 0}</li>
							<li>{t('dashboard.casosDePruebaFallidos')}: {dash?.summary?.totals?.failed ?? 0}</li>
							<li>{t('dashboard.bugsAbiertos')}: {dash?.summary?.bugs?.open ?? 0}</li>
							<li>{t('dashboard.bugsCerrados')}: {dash?.summary?.bugs?.closed ?? 0}</li>
							<li>{t('dashboard.ultimaEjecucion')}: {dash?.summary?.lastRun ?? '-'}</li>
						</ul>
					</div>

					<div>
						<h2 className="mt-4">{t('dashboard.indicadores')}</h2>
						<ul>
							<li>{t('dashboard.porcentajeDeCobertura')}: {(dash?.indicators?.coveragePercent ?? 0)}%</li>
							<li>{t('dashboard.productividadDelEquipoQA')}: {dash?.indicators?.productivity ?? '-'}</li>
							<li>{t('dashboard.prioridadDeBugs')}: Críticos {dash?.indicators?.bugPriority?.critical ?? 0}, Menores {dash?.indicators?.bugPriority?.minor ?? 0}</li>
							<li>{t('dashboard.horasDedicadasQA')}: {dash?.indicators?.qaHours ?? 0}h</li>
						</ul>

						<h2 className="mt-4">{t('dashboard.proximosHitos')}</h2>
						<ul>
							{(dash?.milestones ?? []).map((m, i) => (
								<li key={i}>{t(`dashboard.${m.key}`)}: {m.date}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
