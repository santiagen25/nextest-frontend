import React, { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { FaSearch } from 'react-icons/fa';
import { t } from 'i18next';

export default function TestRepository() {
	usePageTitle('testRepository.title');

	const [folderName, setFolderName] = useState('');
	const [search, setSearch] = useState('');
	const [folders, setFolders] = useState([
		{
			name: t('testRepository.carpetaInicial'),
			tests: [
				{ name: t('testRepository.pruebaLogin'), type: t('testRepository.conPasos') },
				{ name: t('testRepository.pruebaExploratoria'), type: t('testRepository.exploratoria') },
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
			alert(t('testRepository.yaExisteUnaCarpetaConEseNombre'));
			return;
		}
		setFolders([{ name: newName, tests: [] }, ...folders]);
		setFolderName('');
	};

	const handleAddTest = (folderIndex) => {
		const testName = newTests[folderIndex]?.name?.trim();
		const testType = newTests[folderIndex]?.type || t('testRepository.conPasos');

		if (!testName) return;

		const updatedFolders = [...folders];
		updatedFolders[folderIndex].tests.push({ name: testName, type: testType });
		setFolders(updatedFolders);

		// Limpiar solo ese input
		setNewTests({ ...newTests, [folderIndex]: { name: '', type: t('testRepository.conPasos') } });
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
				<h2>{t('testRepository.title')}</h2>

				<div className="input-group w-50 mt-4 mb-4">
					<input
						type="text"
						className="form-control"
						placeholder={t('testRepository.nombreDeLaCarpeta')}
						value={folderName}
						onChange={(e) => setFolderName(e.target.value)}
					/>
					<button className="btn btn-dark btn-sm" onClick={handleAddFolder}>
						{t('testRepository.anadirCarpeta')}
					</button>
				</div>

				<div className="input-group w-100 w-md-50 mb-4">
					<span className="input-group-text">
						<FaSearch />
					</span>
					<input
						type="text"
						placeholder={t('testRepository.buscarPruebaPorNombreOTipo')}
						className="form-control"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>

				{filteredFolders.map((folder, i) => (
					<div key={i} className="mb-4 border p-3 rounded">
						<h5>{folder.name}</h5>
						<button className="btn btn-danger btn-sm mb-2" onClick={() => handleDeleteFolder(i)}>
							{t('testRepository.eliminarCarpeta')}
						</button>

						<div className="input-group mb-2">
							<input
								type="text"
								className="form-control"
								placeholder={t('testRepository.nombreDeLaPrueba')}
								value={newTests[i]?.name || ''}
								onChange={(e) =>
									setNewTests({ ...newTests, [i]: { ...newTests[i], name: e.target.value } })
								}

							/>
							<select
								className="form-select"
								value={newTests[i]?.type || t('testRepository.conPasos')}
								onChange={(e) =>
									setNewTests({ ...newTests, [i]: { ...newTests[i], type: e.target.value } })
								}
							>
								<option>{t('testRepository.conPasos')}</option>
								<option>{t('testRepository.sinPasos')}</option>
								<option>{t('testRepository.exploratoria')}</option>
							</select>
							<button
								className="btn btn-success btn-sm"
								onClick={() => handleAddTest(i)}
								disabled={newTests[i]?.name.length === 0}
							>
								{t('testRepository.crearPrueba')}
							</button>
						</div>

						<table className="table table-bordered">
							<thead>
								<tr>
									<th>{t('testRepository.nombre')}</th>
									<th>{t('testRepository.tipo')}</th>
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
