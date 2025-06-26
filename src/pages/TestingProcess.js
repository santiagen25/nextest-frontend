import React from 'react';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { useNavigate } from 'react-router-dom';
import SidebarTest25 from '../components/SidebarTest25';

export default function TestingProcess() {
	usePageTitle('Proceso de Pruebas');
	const navigate = useNavigate();

	const modules = [
		{ name: 'Dashboard', route: '/dashboard' },
		{ name: 'Repositorio de pruebas', route: '/test-repository' },
		{ name: 'Planes de prueba', route: '/test-plans' },
		{ name: 'Ejecución de pruebas', route: '/ejecucion' },
		{ name: 'Cuadro de mando', route: '/cuadro' }
	];

	return (
		<div>
			<div className="d-flex vh-100">
				<SidebarTest25 />
				<div className="w-100 p-5">
					<h2>Proceso de Pruebas</h2>
					<div className="d-flex justify-content-between flex-wrap mt-4">
						{modules.map((mod) => (
							<div key={mod.name} className="card m-2 p-4 text-center" style={{ cursor: 'pointer', minWidth: '200px' }} onClick={() => navigate(mod.route)}>
								<h5>{mod.name}</h5>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
