import React, { useState, useEffect } from 'react';

export default function EditableTest({ test, onSave, onDelete, canDelete }) {
	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState(test.name);
	const [type, setType] = useState(test.type);

	// 🔑 Esto asegura que si el `test` cambia, se actualiza el state
	useEffect(() => {
		setName(test.name);
		setType(test.type);
	}, [test]);

	const handleSave = () => {
		onSave({ name, type });
		setIsEditing(false);
	};

	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			{isEditing ? (
				<div className="w-100">
					<input
						className="form-control mb-1"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						className="form-control mb-1"
						value={type}
						onChange={(e) => setType(e.target.value)}
					/>
					<div className="d-flex gap-2">
						<button className="btn btn-success btn-sm" onClick={handleSave}>
							Guardar
						</button>
						{canDelete && (
							<button
								className="btn btn-danger btn-sm"
								onClick={() => {
									setIsEditing(false);
									onDelete();
								}}
							>
								Eliminar
							</button>

						)}
					</div>
				</div>
			) : (
				<>
					<span>{test.name} ({test.type})</span>
					<button
						className="btn btn-primary btn-sm"
						onClick={() => setIsEditing(true)}
					>
						Editar
					</button>
				</>
			)}
		</li>
	);
}
