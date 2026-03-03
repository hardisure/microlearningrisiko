import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
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
