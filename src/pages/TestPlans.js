import React, { useState } from 'react';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import SidebarTest25 from '../components/SidebarTest25';
import { t } from 'i18next';

export default function TestPlans() {
	usePageTitle('Planes de prueba');

	const [plans, setPlans] = useState([]);
	const [planName, setPlanName] = useState('');
	const [search, setSearch] = useState('');

	// Simulamos pruebas disponibles en el repositorio
	const sampleTests = [
		{ name: 'Login funcional', type: 'funcional' },
		{ name: 'Carga masiva', type: 'rendimiento' },
		{ name: 'Registro usuario', type: 'funcional' }
	];

	const handleAddPlan = () => {
		if (!planName.trim()) return;
		setPlans([{ name: planName, tests: sampleTests }, ...plans]); // último primero
		setPlanName('');
	};

	const filteredPlans = plans.map(plan => ({
		...plan,
		tests: plan.tests.filter(test =>
			test.name.toLowerCase().includes(search.toLowerCase()) ||
			test.type.toLowerCase().includes(search.toLowerCase())
		)
	}));

	return (
		<div>
			<div className="d-flex vh-100">
				<SidebarTest25 />
				<div className="w-100 p-5">
					<h2>Planes de prueba</h2>

					<div className="d-flex gap-3 mt-4 mb-4">
						<label className="form-label">{t('nom')}:</label>
						<input
							className="form-control"
							type="text"
							placeholder="Nombre del plan..."
							value={planName}
							onChange={(e) => setPlanName(e.target.value)}
						/>
						<button onClick={handleAddPlan}>Crear plan</button>
					</div>

					<input
						type="text"
						placeholder="Buscar prueba por nombre o tipo..."
						className="form-control w-50 mb-3"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>

					{filteredPlans.map((plan, i) => (
						<div key={i} className="mb-4">
							<h5>{plan.name}</h5>
							<ul className="list-group">
								{plan.tests.map((test, j) => (
									<li key={j} className="list-group-item">
										{test.name} ({test.type})
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
