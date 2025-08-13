import React, { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { FaSearch } from 'react-icons/fa';

export default function TestRepository() {
	usePageTitle('Repositorio de Pruebas');

	const [folderName, setFolderName] = useState('');
	const [search, setSearch] = useState('');
	const [folders, setFolders] = useState([
		{
			name: 'Carpeta Inicial',
			tests: [
				{ name: 'Prueba Login', type: 'Con Pasos' },
				{ name: 'Prueba Exploratoria', type: 'Exploratoria' },
			],
		},
	]);

	const [newTests, setNewTests] = useState({});

	const normalize = (text) =>
		text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

	const handleAddFolder = () => {
		const newName = folderName.trim();
		if (!newName) return;
		const exists = folders.some((f) => normalize(f.name) === normalize(newName));
		if (exists) {
			alert('Ya existe una carpeta con ese nombre.');
			return;
		}
		setFolders([{ name: newName, tests: [] }, ...folders]);
		setFolderName('');
	};

	const handleAddTest = (folderIndex) => {
		const testName = newTests[folderIndex]?.name?.trim();
		const testType = newTests[folderIndex]?.type || 'Con Pasos';

		if (!testName) return;

		const updatedFolders = [...folders];
		updatedFolders[folderIndex].tests.push({ name: testName, type: testType });
		setFolders(updatedFolders);

		// Limpiar solo ese input
		setNewTests({ ...newTests, [folderIndex]: { name: '', type: 'Con Pasos' } });
	};

	const normalizedSearch = normalize(search);

	const filteredFolders = folders
		.filter(
			(folder) =>
				normalize(folder.name).includes(normalizedSearch) ||
				folder.tests.some(
					(test) =>
						normalize(test.name).includes(normalizedSearch) ||
						normalize(test.type).includes(normalizedSearch)
				)
		)
		.map((folder) => ({
			...folder,
			tests: folder.tests.filter(
				(test) =>
					normalize(test.name).includes(normalizedSearch) ||
					normalize(test.type).includes(normalizedSearch)
			),
		}));

	const handleDeleteFolder = (index) => {
		setFolders(folders.filter((_, i) => i !== index));
	};

	return (
		<div className="d-flex min-vh-100 p-5">
			<div className="w-100">
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

				<div className="input-group w-100 w-md-50 mb-4">
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

				{filteredFolders.map((folder, i) => (
					<div key={i} className="mb-4 border p-3 rounded">
						<h5>{folder.name}</h5>
						<button className="btn btn-danger btn-sm mb-2" onClick={() => handleDeleteFolder(i)}>
							Eliminar carpeta
						</button>

						<div className="input-group mb-2">
							<input
								type="text"
								className="form-control"
								placeholder="Nombre de la prueba..."
								value={newTests[i]?.name || ''}
								onChange={(e) =>
									setNewTests({ ...newTests, [i]: { ...newTests[i], name: e.target.value } })
								}

							/>
							<select
								className="form-select"
								value={newTests[i]?.type || 'Con Pasos'}
								onChange={(e) =>
									setNewTests({ ...newTests, [i]: { ...newTests[i], type: e.target.value } })
								}
							>
								<option>Con Pasos</option>
								<option>Sin Pasos</option>
								<option>Exploratoria</option>
							</select>
							<button
								className="btn btn-success btn-sm"
								onClick={() => handleAddTest(i)}
								disabled={newTests[i]?.name.length === 0}
							>
								Crear Prueba
							</button>
						</div>

						<table className="table table-bordered">
							<thead>
								<tr>
									<th>Nombre</th>
									<th>Tipo</th>
								</tr>
							</thead>
							<tbody>
								{folder.tests.map((test, j) => (
									<tr key={j}>
										<td>{test.name}</td>
										<td>{test.type}</td>
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
