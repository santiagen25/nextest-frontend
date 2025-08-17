import { useState } from 'react';
import SidebarTest25 from '../components/SidebarTest25';
import Footer from '../components/Footer';
import TestRepository from './TestRepository';
import TestPlans from './TestPlans';
import DashboardTest from './DashboardTest';
import Summary from './Summary';
import TestExecution from './TestExecution';
import { t } from 'i18next';

export default function TestingProcess() {
	const [activeTab, setActiveTab] = useState('Dashboard');

	const modules = [
		{ name: t('dashboard.title'), component: <DashboardTest /> },
		{ name: t('testRepository.title'), component: <TestRepository /> },
		{ name: t('testPlans.title'), component: <TestPlans /> },
		{ name: t('testExecution.title'), component: <TestExecution /> },
		{ name: t('controlPanel.title'), component: <Summary /> }
	];

	return (
		<div className="d-flex flex-column min-vh-100">
			<div className="d-flex flex-grow-1 align-items-stretch">
				<div className="bg-dark">
					<SidebarTest25 />
				</div>
				<main className="flex-grow-1 p-5 mt-5 mt-md-0">
					<h2>{t('testingProcess.title')}</h2>

					<div className="d-flex justify-content-between mt-4 w-100 flex-wrap flex-md-nowrap">
						{modules.map(mod => (
							<div
								key={mod.name}
								className={`flex-grow-1 card m-1 m-md-2 p-2 p-md-3 text-center ${activeTab === mod.name ? 'bg-primary text-white' : ''}`}
								style={{ cursor: 'pointer', minWidth: '120px' }}
								onClick={() => setActiveTab(mod.name)}
							>
								<h5 className="mb-0">{mod.name}</h5>
							</div>
						))}
					</div>

					<div className="mt-4">
						{modules.find(mod => mod.name === activeTab)?.component}
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
}
