import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { getUnitById } from '../data/users.js';

export default function Navbar() {
    const { user, logout } = useAuth();
    const location = useLocation();

    if (!user) return null;

    const unit = getUnitById(user.unitId);
    const initials = user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

    const navItems = user.role === 'admin'
        ? [{ path: '/dashboard', label: 'Dashboard' }, { path: '/admin', label: 'Admin Panel' }]
        : user.role === 'management'
            ? [{ path: '/dashboard', label: 'Dashboard' }, { path: '/management', label: 'Dashboard Manajemen' }]
            : [{ path: '/dashboard', label: 'Dashboard' }];

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <div className="navbar-brand-icon">R</div>
                <div>
                    <h1>LMS Risiko</h1>
                    <span>PT Mitra Karya Prima</span>
                </div>
            </div>

            <div className="navbar-right">
                <ul className="navbar-nav">
                    {navItems.map(item => (
                        <li key={item.path}>
                            <Link to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="navbar-user">
                    <div className="navbar-avatar">{initials}</div>
                    <div className="navbar-user-info">
                        <span className="navbar-user-name">{user.name}</span>
                        <span className="navbar-user-role">{unit?.name || user.role}</span>
                    </div>
                </div>

                <button className="btn-logout" onClick={logout}>Keluar</button>
            </div>
        </nav>
    );
}
