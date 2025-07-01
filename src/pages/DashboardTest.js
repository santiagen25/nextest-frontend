import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePageTitle } from '../hooks/usePageTitle';
import { Doughnut } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

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

	return (
		<div>
			<div style={{ padding: '2rem' }}>
				<h1>{t('dashboard.bienvenido')}</h1>
				<p>Aquí podrás ver el resumen de tu Proyecto de Testing</p>

				<div style={{ maxWidth: '400px', marginTop: '2rem' }}>
					<h2>Estado de Casos de Prueba</h2>
					<Doughnut data={data} />
				</div>

				<div style={{ marginTop: '2rem' }}>
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
	);
}
