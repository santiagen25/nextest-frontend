import { FaUserCheck, FaBug } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import { useEffect, useState } from 'react';

export default function SidebarContent() {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        let ok = true;
        fetch('/mocks/sidebar.json').then(r => r.json()).then(d => ok && setInfo(d));
        return () => { ok = false; };
    }, []);

    const tester = info?.tester;

    return (
        <>
            {/* Logo */}
            <Link to="/dashboard" className="mb-5 text-decoration-none text-center">
                <h2 className="fw-bold" style={{ cursor: 'pointer' }}>
                    <span style={{ color: '#ccc' }}>nextest</span>
                    <span style={{ color: '#b0e622' }}>.io</span>
                </h2>
            </Link>

            {/* Tester Info Box */}
            <div className="bg-secondary rounded p-2 p-lg-3 text-center w-75 mx-auto mb-4">
                <FaUserCheck size={32} className="mb-2" />
                <div className="small">{t('sidebar.tester')}: {tester?.name ?? '-'}</div>
                <div className="small">{t('sidebar.especialidad')}: {tester?.especialidad ?? '-'}</div>
                <div className="small">{t('sidebar.nivel')}: {tester?.nivel ?? '-'}</div>
                <div className="small">{t('sidebar.certificado')}: {tester?.certificado ?? '-'}</div>
                <div className="small">{t('sidebar.id')}: {tester?.id ?? '-'}</div>
            </div>

            {/* Menu Option */}
            <div className="d-flex align-items-center gap-2 w-75 p-2 bg-black mx-auto rounded">
                <FaBug />
                <span>{t('sidebar.miPerfilDeTester')}</span>
            </div>
        </>
    );
}