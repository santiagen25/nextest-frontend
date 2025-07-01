import React, { useState } from 'react';
import SidebarTest25 from '../components/SidebarTest25';
import Footer from '../components/Footer';
import TestRepository from './TestRepository';
import TestPlans from './TestPlans';
import Execution from './ExploratoryTestForm';
import DashboardTest from './DashboardTest';

export default function TestingProcess() {
	const [activeTab, setActiveTab] = useState('Dashboard');

	const modules = [
		{ name: 'Dashboard', component: <DashboardTest /> },
		{ name: 'Repositorio de pruebas', component: <TestRepository /> },
		{ name: 'Planes de prueba', component: <TestPlans /> },
		{ name: 'Ejecución de pruebas', component: <Execution /> },
		{ name: 'Cuadro de Mando', component: <Execution /> }
	];

	return (
		<div>
			<div className="d-flex min-vh-100">
				<SidebarTest25 />
				<div className="w-100 p-5">
					<h2>Proceso de Pruebas</h2>
					<div className="d-flex justify-content-start flex-wrap mt-4">
						{modules.map((mod) => (
							<div
								key={mod.name}
								className={`card m-2 p-4 text-center ${activeTab === mod.name ? 'bg-primary text-white' : ''}`}
								style={{ cursor: 'pointer', minWidth: '200px' }}
								onClick={() => setActiveTab(mod.name)}
							>
								<h5>{mod.name}</h5>
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
