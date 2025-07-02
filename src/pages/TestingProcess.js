import React, { useState } from 'react';
import SidebarTest25 from '../components/SidebarTest25';
import Footer from '../components/Footer';
import TestRepository from './TestRepository';
import TestPlans from './TestPlans';
import DashboardTest from './DashboardTest';
import Summary from './Summary';
import TestExecution from './TestExecution';

export default function TestingProcess() {
	const [activeTab, setActiveTab] = useState('Dashboard');

	const modules = [
		{ name: 'Dashboard', component: <DashboardTest /> },
		{ name: 'Repositorio de pruebas', component: <TestRepository /> },
		{ name: 'Planes de prueba', component: <TestPlans /> },
		{ name: 'Ejecución de pruebas', component: <TestExecution /> },
		{ name: 'Cuadro de Mando', component: <Summary /> }
	];

	return (
		<div>
			<div className="d-flex min-vh-100">
				<SidebarTest25 />
				<div className="w-100 p-5">
					<h2>Proceso de Pruebas</h2>
					<div className="d-flex justify-content-between mt-4 w-100 flex-wrap flex-md-nowrap">
						{modules.map((mod) => (
							<div
								key={mod.name}
								className={`flex-grow-1 card m-2 p-3 text-center ${activeTab === mod.name ? 'bg-primary text-white' : ''}`}
								style={{ cursor: 'pointer', minWidth: '120px' }}
								onClick={() => setActiveTab(mod.name)}
							>
								<h5 className="mb-0">{mod.name}</h5>
							</div>
						))}
					</div>
					<div className="mt-4">
						{modules.find((mod) => mod.name === activeTab)?.component}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
