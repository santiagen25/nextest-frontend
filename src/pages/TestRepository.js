import React, { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import EditableTest from '../components/EditableTest';
import { FaSearch } from 'react-icons/fa';

export default function TestRepository() {
	usePageTitle('Repositorio de Pruebas');

	const [folderName, setFolderName] = useState('');
	const [search, setSearch] = useState('');
	const [folders, setFolders] = useState([
		{
			name: 'Carpeta Inicial',
			tests: [
				{ name: 'Prueba Login', type: 'funcional' },
				{ name: 'Prueba Carga', type: 'rendimiento' },
			],
		},
	]);

	const normalize = (text) =>
		text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

	const sampleTests = [
		{ name: 'Prueba Login', type: 'funcional' },
		{ name: 'Prueba Carga', type: 'rendimiento' },
	];

	const handleAddFolder = () => {
		const newName = folderName.trim();
		if (!newName) return;

		const exists = folders.some(f => normalize(f.name) === normalize(newName));
		if (exists) {
			alert('Ya existe una carpeta con ese nombre.');
			return;
		}

		setFolders([{ name: newName, tests: sampleTests }, ...folders]);
		setFolderName('');
	};

	const handleUpdateTest = (folderIndex, testIndex, updatedTest) => {
		const updatedFolders = [...folders];
		updatedFolders[folderIndex].tests[testIndex] = updatedTest;
		setFolders(updatedFolders);
	};

	const normalizedSearch = normalize(search);

	const filteredFolders = folders
		.filter(folder =>
			normalize(folder.name).includes(normalizedSearch) ||
			folder.tests.some(test =>
				normalize(test.name).includes(normalizedSearch) ||
				normalize(test.type).includes(normalizedSearch)
			)
		)
		.map(folder => ({
			...folder,
			tests: folder.tests.filter(test =>
				normalize(test.name).includes(normalizedSearch) ||
				normalize(test.type).includes(normalizedSearch)
			)
		}));

	const handleDeleteFolder = (index) => {
		setFolders(folders.filter((_, i) => i !== index));
	};

	return (
		<div>
			<div className="d-flex min-vh-100">
				<div className="w-100 p-5">
					<h2>Repositorio de Pruebas</h2>

					<div className="input-group w-50 mt-4 mb-4">
						<input
							type="text"
							className="form-control"
							placeholder="Nombre de la carpeta..."
							value={folderName}
							onChange={(e) => setFolderName(e.target.value)}
						/>
						<button className="btn btn-dark btn-sm" onClick={handleAddFolder}>
							Añadir Carpeta
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

					{filteredFolders.map((folder, i) => (
						<div key={i} className="mb-4">
							<table className="table">
								<thead>
									<tr>
										<th style={{ width: '40%' }}>Carpeta</th>
										<th style={{ width: '40%' }}>Pruebas</th>
										<th style={{ width: '20%' }}>Acciones</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><strong>{folder.name}</strong></td>
										<td>{folder.tests.length} pruebas</td>
										<td>
											<button
												className="btn btn-outline-danger btn-sm"
												onClick={() => handleDeleteFolder(i)}
											>
												Eliminar carpeta
											</button>
										</td>
									</tr>

									{folder.tests.map((test, j) => (
										<tr key={j}>
											<td></td>
											<td>{test.name} ({test.type})</td>
											<td></td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					))}

				</div>
			</div>
		</div>
	);
}
