import React, { useState, useEffect } from 'react';
import Sidebar25 from '../components/Sidebar25';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { t } from 'i18next';

export default function AssignProfiles() {
	const [testers, setTesters] = useState([]);
	const [selectedTesters, setSelectedTesters] = useState([]);

	usePageTitle('assignProfiles.title');

	useEffect(() => {
		// Simula carga desde backend
		setTesters([
			{ id: 1, name: 'Ana Pérez', email: 'ana@test.com' },
			{ id: 2, name: 'Luis García', email: 'luis@test.com' },
			{ id: 3, name: 'María Torres', email: 'maria@test.com' }
		]);
	}, []);

	const toggleTester = (id) => {
		setSelectedTesters(prev =>
			prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí mandarías selectedTesters al backend
		console.log('Testers asignados:', selectedTesters);
	};

	return (
		<div>
			<div className="d-flex vh-100">
				<Sidebar25 />
				<div className="w-75 d-flex align-items-center justify-content-center mx-auto">
					<div className="px-5">
						<h2 className="mb-4">{t('assignProfiles.asignarTesters')}</h2>
						<form onSubmit={handleSubmit} className="adaptedForm">
							<ul className="list-group">
								{testers.map(tester => (
									<li key={tester.id} className="list-group-item d-flex justify-content-between align-items-center">
										<label htmlFor={`tester-${tester.id}`} className="w-100 d-flex align-items-center" style={{ cursor: 'pointer' }}>
											<input
												type="checkbox"
												id={`tester-${tester.id}`}
												checked={selectedTesters.includes(tester.id)}
												onChange={() => toggleTester(tester.id)}
												className="form-check-input me-2"
											/>
											{tester.name} ({tester.email})
										</label>
									</li>
								))}
							</ul>
							<div className="d-flex justify-content-end mt-4">
								<button type="submit" className="btn btn-dark text-uppercase">{t('assignProfiles.asignar')}</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
