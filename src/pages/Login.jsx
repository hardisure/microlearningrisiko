import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function Login() {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setError('');
        const result = login(username, password);
        if (!result.success) setError(result.error);
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-logo">
                    <div className="login-logo-icon">R</div>
                    <h2>LMS Manajemen Risiko</h2>
                    <p>PT Mitra Karya Prima</p>
                </div>

                {error && <div className="login-error">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Username</label>
                        <input id="login-username" className="form-input" type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Masukkan username" required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input id="login-password" className="form-input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Masukkan password" required />
                    </div>
                    <button id="login-submit" className="btn btn-primary btn-lg" type="submit" style={{ width: '100%' }}>Masuk</button>
                </form>

                <div style={{ marginTop: '24px', padding: '16px', background: '#F9FAFB', borderRadius: '8px', fontSize: '12px', color: '#6B7280' }}>
                    <strong>Demo Accounts:</strong><br />
                    User: budi.santoso / mkp2026<br />
                    Admin: admin / admin2026<br />
                    Management: manajemen / mgmt2026
                </div>
            </div>
        </div>
    );
}
