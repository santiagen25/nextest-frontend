import React from 'react';
import { FaBug, FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SidebarTest25() {
	return (
		<div className="w-25 bg-dark text-white min-vh-100 d-flex flex-column align-items-center pt-4">
			{/* Logo */}
			<Link to="/dashboard" className="mb-5 text-decoration-none">
				<h2 className="fw-bold" style={{ cursor: 'pointer' }}>
					<span style={{ color: '#ccc' }}>nextest</span>
					<span style={{ color: '#b0e622' }}>.io</span>
				</h2>
			</Link>

			{/* Tester Info Box */}
			<div className="bg-secondary rounded p-3 text-center w-75 mb-4">
				<FaUserCheck size={32} className="mb-2" />
				<div className="small">TESTER: Juanita QA</div>
				<div className="small">Especialidad: Funcional</div>
				<div className="small">Nivel: Senior</div>
				<div className="small">Certif: ISTQB</div>
				<div className="small">ID: T-1024</div>
			</div>

			{/* Menu Option */}
			<div className="d-flex align-items-center gap-2 w-75 px-2 py-2 bg-black rounded">
				<FaBug />
				<span>Mi perfil de tester</span>
			</div>
		</div>
	);
}
