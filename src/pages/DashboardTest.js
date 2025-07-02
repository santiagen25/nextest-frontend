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
		labels: ['Aprobados', 'Fallidos'],
		datasets: [
			{
				label: 'Casos de Prueba',
				data: [68, 8], // Inventado
				backgroundColor: ['#198754', '#dc3545'], // Verde y rojo Bootstrap
				borderWidth: 1,
			},
		],
	};

	const bugsPorModulo = {
		labels: ['Login', 'Dashboard', 'API', 'Base de Datos', 'Mobile'],
		datasets: [
			{
				label: 'Bugs Encontrados',
				data: [3, 5, 2, 4, 1],
				backgroundColor: '#0d6efd', // Azul Bootstrap
			},
		],
	};

	return (
		<div>
			<div style={{ padding: '2rem' }}>
				<h1>{t('dashboard.bienvenido')}</h1>
				<p>Aquí podrás ver el resumen de tu Proyecto de Testing</p>

				<div className="d-flex justify-content-between">
					<div style={{ minWidth: '25vw', maxWidth: '30vw', marginTop: '2rem' }}>
						<h2>Estado de Casos de Prueba</h2>
						<Doughnut data={data} />
					</div>

					<div style={{ minWidth: '30vw', maxWidth: '40vw', marginTop: '2rem' }}>
						<h2>Bugs por Módulo</h2>
						<Bar data={bugsPorModulo} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Distribución de Bugs' } } }} />
					</div>
				</div>

				<div className="d-flex justify-content-between" style={{ marginTop: '8rem' }}>
					<div>
						<h2>Resumen</h2>
						<ul>
							<li>Inicio del Proyecto: 21/05/2025</li>
							<li>Entrega del Proyecto: 24/07/2025</li>
							<li>Cliente: TechCorp Solutions S.A.</li>
							<li>Responsable QA: Santiago Torrabadella</li>
							<li>Tipo de Pruebas: Funcionales, Regresión, Integración</li>
							<li>Casos de Prueba Totales: 128</li>
							<li>Casos de Prueba Ejecutados: 76</li>
							<li>Casos de Prueba Aprobados: 68</li>
							<li>Casos de Prueba Fallidos: 8</li>
							<li>Bugs Abiertos: 5</li>
							<li>Bugs Cerrados: 12</li>
							<li>Última Ejecución: 30/06/2025</li>
						</ul>
					</div>

					<div>
						<h2 className="mt-4">Indicadores</h2>
						<ul>
							<li>Porcentaje de Cobertura: 59%</li>
							<li>Productividad del Equipo QA: Alta</li>
							<li>Prioridad de Bugs: 2 críticos, 3 menores</li>
							<li>Horas Dedicadas QA: 240h</li>
						</ul>

						<h2 className="mt-4">Próximos Hitos</h2>
						<ul>
							<li>Revisión de Requisitos: 05/07/2025</li>
							<li>Pruebas de Regresión Final: 15/07/2025</li>
							<li>Informe Final de QA: 22/07/2025</li>
						</ul>
					</div>

				</div>
			</div>
		</div>
	);
}
