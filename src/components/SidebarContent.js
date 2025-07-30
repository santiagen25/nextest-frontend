import { FaIdBadge, FaUser } from 'react-icons/fa';
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

            {/* User Info Box */}
            <div className="bg-secondary rounded p-3 text-center w-75 mb-4">
                <FaUser size={32} className="mb-2" />
                <div className="small">COMPANY NAME</div>
                <div className="small">USER ID NAME</div>
            </div>

            {/* Menu Option */}
            <div className="d-flex align-items-center gap-2 w-75 px-2 py-2 bg-black rounded">
                <FaIdBadge />
                <span>Company Profile</span>
            </div>
        </>
    );
}
