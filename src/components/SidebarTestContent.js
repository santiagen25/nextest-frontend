import { FaUserCheck, FaBug } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SidebarContent() {
    return (
        <>        
            {/* Logo */}
            <Link to="/dashboard" className="mb-5 text-decoration-none">
                <h2 className="fw-bold" style={{ cursor: 'pointer' }}>
                    <span style={{ color: '#ccc' }}>nextest</span>
                    <span style={{ color: '#b0e622' }}>.io</span>
                </h2>
            </Link>

            {/* Tester Info Box */}
            <div className="bg-secondary rounded p-2 p-lg-3 text-center w-75 mb-4">
                <FaUserCheck size={32} className="mb-2" />
                <div className="small">TESTER: Santiago Torrabadella</div>
                <div className="small">Especialidad: Funcional</div>
                <div className="small">Nivel: Senior</div>
                <div className="small">Certif: ISTQB</div>
                <div className="small">ID: T-1024</div>
            </div>

            {/* Menu Option */}
            <div className="d-flex align-items-center gap-2 w-75 p-2 bg-black rounded">
                <FaBug />
                <span>Mi perfil de tester</span>
            </div>
        </>
    );
}