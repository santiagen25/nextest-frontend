import React, { useEffect, useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { FaSearch } from 'react-icons/fa';

export default function TestPlans() {
	usePageTitle('Planes de Prueba');

	const [planName, setPlanName] = useState('');
	const [search, setSearch] = useState('');
	const [plans, setPlans] = useState([]);
	const [availableTests] = useState([
		{ name: 'Prueba Login', type: 'Con Pasos' },
		{ name: 'Prueba Exploratoria', type: 'Exploratoria' },
		{ name: 'Prueba Carga', type: 'Sin Pasos' },
	]);

	// Cargar planes guardados al iniciar
	useEffect(() => {
		const saved = localStorage.getItem('testPlans');
		if (saved) {
			try {
				setPlans(JSON.parse(saved));
			} catch (e) {
				console.error('Error parsing testPlans', e);
			}
		}
	}, []);

	// Guardar cada vez que cambian
	useEffect(() => {
		localStorage.setItem('testPlans', JSON.stringify(plans));
	}, [plans]);


	const normalize = (text) =>
		text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

	const handleAddPlan = () => {
		const newName = planName.trim();
		if (!newName) return;
		setPlans(prevPlans => {
			const exists = prevPlans.some(
				(plan) => normalize(plan.name) === normalize(newName)
			);
			if (exists) {
				alert('Ya existe un plan con ese nombre.');
				return prevPlans; // <-- NO SOBREESCRIBE
			}
			return [{ name: newName, tests: [] }, ...prevPlans];
		});
		setPlanName('');
	};


	const handleAddTestToPlan = (planIndex, test) => {
		const updatedPlans = [...plans];
		const exists = updatedPlans[planIndex].tests.some(
			(t) => normalize(t.name) === normalize(test.name)
		);
		if (exists) {
			alert('Esta prueba ya está en el plan.');
			return;
		}
		updatedPlans[planIndex].tests.push(test);
		setPlans(updatedPlans);
	};

	const handleDeletePlan = (index) => {
		setPlans(plans.filter((_, i) => i !== index));
	};

	const handleDeleteTestFromPlan = (planIndex, testIndex) => {
		const updatedPlans = [...plans];
		updatedPlans[planIndex].tests.splice(testIndex, 1);
		setPlans(updatedPlans);
	};

	const normalizedSearch = normalize(search);

	const filteredPlans = plans.filter(
		(plan) =>
			normalize(plan.name).includes(normalizedSearch) ||
			plan.tests.some(
				(test) =>
					normalize(test.name).includes(normalizedSearch) ||
					normalize(test.type).includes(normalizedSearch)
			)
	);

	return (
		<div className="d-flex min-vh-100 p-5">
			<div className="w-100">
				<h2>Planes de Prueba</h2>

				<div className="input-group w-50 mt-4 mb-4">
					<input
						type="text"
						className="form-control"
						placeholder="Nombre del plan..."
						value={planName}
						onChange={(e) => setPlanName(e.target.value)}
					/>
					<button className="btn btn-dark btn-sm" onClick={handleAddPlan}>
						Crear Plan
					</button>
				</div>

				<div className="input-group w-50 mb-4">
					<span className="input-group-text">
						<FaSearch />
					</span>
					<input
						type="text"
						placeholder="Buscar plan o prueba..."
						className="form-control"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>

				{filteredPlans.map((plan, i) => (
					<div key={i} className="mb-4 border p-3 rounded">
						<div className="d-flex justify-content-between align-items-center mb-2">
							<h5>{plan.name}</h5>
							<button
								className="btn btn-danger btn-sm"
								onClick={() => handleDeletePlan(i)}
							>
								Eliminar Plan
							</button>
						</div>

						<div className="mb-2">
							<strong>Añadir Prueba:</strong>
							{availableTests.map((test, idx) => (
								<button
									key={idx}
									className="btn btn-sm btn-primary m-1"
									onClick={() => handleAddTestToPlan(i, test)}
								>
									{test.name} ({test.type})
								</button>
							))}
						</div>

						<table className="table table-bordered">
							<thead>
								<tr>
									<th>Nombre</th>
									<th>Tipo</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tbody>
								{plan.tests.map((test, j) => (
									<tr key={j}>
										<td>{test.name}</td>
										<td>{test.type}</td>
										<td>
											<button
												className="btn btn-sm btn-danger"
												onClick={() => handleDeleteTestFromPlan(i, j)}
											>
												Quitar
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				))}
			</div>
		</div>
	);
}
