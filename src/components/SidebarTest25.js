import { FaBars } from 'react-icons/fa';
import SidebarTestContent from './SidebarTestContent';
import { useState } from 'react';

export default function SidebarTest25() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleSidebar = () => setIsOpen(!isOpen);

	return (
		<>
			{/* Botón hamburguesa para móviles */}
			<button
				className="btn btn-dark d-md-none position-absolute m-2"
				style={{ zIndex: 1100, width: 'auto' }}
				onClick={toggleSidebar}>
				<FaBars />
			</button>

			{/* Sidebar móvil */}
			<div
				className={`padding-for-sidebar bg-dark text-white vh-100 d-flex flex-column align-items-center
					position-absolute start-0 w-75 d-md-none sidebar-transition
					${isOpen ? 'sidebar-visible' : 'sidebar-hidden'}
				`}
				style={{ zIndex: 1000 }}>
				<SidebarTestContent />
			</div>

			{/* Sidebar escritorio */}
			<div className="d-none d-md-flex flex-column bg-dark text-white pt-4">
				<SidebarTestContent />
			</div>
		</>
	);
}
