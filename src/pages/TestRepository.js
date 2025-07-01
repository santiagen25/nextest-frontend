import React, { useState } from 'react';
import Footer from '../components/Footer';
import { usePageTitle } from '../hooks/usePageTitle';
import { t } from 'i18next';

export default function TestRepository() {
	usePageTitle('Repositorio de Pruebas');

	const [folders, setFolders] = useState([]);
	const [newFolder, setNewFolder] = useState('');
	const [searchTerm, setSearchTerm] = useState('');

	const handleAddFolder = () => {
		if (!newFolder.trim()) return;
		setFolders([...folders, { name: newFolder, tests: [] }]);
		setNewFolder('');
	};

	const filteredFolders = folders.filter(f =>
		f.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div>
			<div className="d-flex vh-100">
				<div className="w-100 p-5">
					<h2>Repositorio de pruebas</h2>

					<div className="d-flex gap-3 mt-4 mb-4">
						<label className="form-label">{t('nom')}:</label>
						<input
							className="form-control"
							type="text"
							placeholder="Nombre de carpeta..."
							value={newFolder}
							onChange={(e) => setNewFolder(e.target.value)}
						/>
						<button onClick={handleAddFolder}>Añadir carpeta</button>
					</div>

					<input
						type="text"
						placeholder="Buscar carpeta por nombre..."
						className="form-control w-50 mb-3"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>

					<ul className="list-group">
						{filteredFolders.map((folder, idx) => (
							<li key={idx} className="list-group-item">
								<strong>{folder.name}</strong> (0 pruebas)
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
