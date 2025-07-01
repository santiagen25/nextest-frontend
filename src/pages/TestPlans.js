import React, { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { t } from 'i18next';
import EditableTest from '../components/EditableTest';
import { FaSearch } from 'react-icons/fa';

export default function TestPlans() {
	usePageTitle('Planes de prueba');

	const [planName, setPlanName] = useState('');
	const [search, setSearch] = useState('');
	const [plans, setPlans] = useState([
		{
			name: 'Plan de prueba inicial 1',
			tests: [
				{ name: 'Login funcional', type: 'funcional' },
				{ name: 'Carga masiva', type: 'rendimiento' },
			],
		},
		{
			name: 'Plan de prueba inicial 2',
			tests: [
				{ name: 'Registro usuario', type: 'funcional' },
				{ name: 'Prueba de estrés', type: 'rendimiento' },
			],
		},
	]);

	const normalize = (text) =>
		text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

	const sampleTests = [
		{ name: 'Login funcional', type: 'funcional' },
		{ name: 'Carga masiva', type: 'rendimiento' },
		{ name: 'Registro usuario', type: 'funcional' }
	];

	const handleAddPlan = () => {
		const newName = planName.trim();
		if (!newName) return;

		const exists = plans.some(plan => normalize(plan.name) === normalize(newName));
		if (exists) {
			alert('Ya existe un plan de prueba con ese nombre.');
			return;
		}

		setPlans([{ name: newName, tests: sampleTests }, ...plans]);
		setPlanName('');
	};

	const handleUpdateTest = (planIndex, testIndex, updatedTest) => {
		const updatedPlans = [...plans];
		updatedPlans[planIndex].tests[testIndex] = updatedTest;
		setPlans(updatedPlans);
	};


	const normalizedSearch = normalize(search);

	const filteredPlans = plans
		.filter(plan =>
			normalize(plan.name).includes(normalizedSearch) ||
			plan.tests.some(test =>
				normalize(test.name).includes(normalizedSearch) ||
				normalize(test.type).includes(normalizedSearch)
			)
		)
		.map(plan => ({
			...plan,
			tests: plan.tests.filter(test =>
				normalize(test.name).includes(normalizedSearch) ||
				normalize(test.type).includes(normalizedSearch)
			)
		}));

	const handleDeletePlan = (index) => {
		setPlans(plans.filter((_, i) => i !== index));
	};

	const handleDeleteTest = (planIndex, testIndex) => {
		const updatedPlans = [...plans];
		updatedPlans[planIndex].tests.splice(testIndex, 1);
		setPlans(updatedPlans);
	};


	return (
		<div>
			<div className="d-flex min-vh-100">
				<div className="w-100 p-5">
					<h2>Planes de prueba</h2>

					<div className="input-group w-50 mt-4 mb-4">
						<input
							type="text"
							className="form-control"
							placeholder="Nombre del plan..."
							value={planName}
							onChange={(e) => setPlanName(e.target.value)}
						/>
						<button className="btn btn-dark btn-sm" onClick={handleAddPlan}>
							Crear plan
						</button>
					</div>

					<div className="mt-4 mt-5 mb-4">
						<div className="input-group w-50">
							<span className="input-group-text">
								<FaSearch />
							</span>
							<input
								type="text"
								placeholder="Buscar prueba por nombre o tipo..."
								className="form-control"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
						</div>
					</div>

					{filteredPlans.map((plan, i) => (
						<div key={i} className="mb-4">
							<div className="d-flex justify-content-between align-items-center mb-2">
								<h5 className="mb-0">{plan.name}</h5>
								<button className="btn btn-danger btn-sm" onClick={() => handleDeletePlan(i)}>
									Eliminar
								</button>
							</div>

							<ul className="list-group">
								{plan.tests.map((test, j) => (
									<EditableTest
										key={j}
										test={test}
										onSave={(updatedTest) => handleUpdateTest(i, j, updatedTest)}
										onDelete={() => handleDeleteTest(i, j)}
										canDelete={plan.tests.length > 1}
									/>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
