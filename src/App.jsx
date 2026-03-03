import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
import { useState, useEffect } from 'react';
import { initFromFirebase, listenAdminChanges } from './data/store.js';
import Navbar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ModulePage from './pages/ModulePage.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import ManagementDashboard from './pages/ManagementDashboard.jsx';

function ProtectedRoute({ children, roles }) {
    const { user, isAuthenticated } = useAuth();
    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (roles && !roles.includes(user.role)) return <Navigate to="/dashboard" replace />;
    return children;
}

function AppRoutes() {
    const { isAuthenticated, user } = useAuth();

    return (
        <Routes>
            <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />} />
            <Route path="/dashboard" element={<ProtectedRoute><Navbar /><div className="main-content"><Dashboard /></div></ProtectedRoute>} />
            <Route path="/module/:id" element={<ProtectedRoute><Navbar /><div className="main-content"><ModulePage /></div></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute roles={['admin']}><Navbar /><div className="main-content"><AdminPanel /></div></ProtectedRoute>} />
            <Route path="/management" element={<ProtectedRoute roles={['management', 'admin']}><Navbar /><div className="main-content"><ManagementDashboard /></div></ProtectedRoute>} />
            <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />
        </Routes>
    );
}

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Race: Firebase init vs 3-second timeout (whichever finishes first)
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000);

        initFromFirebase()
            .then(() => {
                try { listenAdminChanges(); } catch (e) { console.warn('Admin listener setup failed:', e); }
            })
            .catch((err) => {
                console.warn('Firebase init failed, using localStorage:', err);
            })
            .finally(() => {
                clearTimeout(timeout);
                setLoading(false);
            });

        return () => clearTimeout(timeout);
    }, []);

    if (loading) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#0F172A', color: '#fff' }}>
                <div style={{ width: '40px', height: '40px', border: '4px solid rgba(255,255,255,0.2)', borderTop: '4px solid #3B82F6', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                <p style={{ marginTop: '16px', fontSize: '14px', color: '#94A3B8' }}>Memuat data...</p>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    return (
        <HashRouter>
            <AuthProvider>
                <div className="app-layout">
                    <AppRoutes />
                </div>
            </AuthProvider>
        </HashRouter>
    );
}
