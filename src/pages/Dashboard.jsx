import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { MODULES, MODULE_GROUPS } from '../data/modules.js';
import { getUserStats, getAllModuleProgress, getMonthlyData } from '../data/store.js';
import { BarChart } from '../components/Chart.jsx';

export default function Dashboard() {
    const { user } = useAuth();
    const stats = getUserStats(user.id);
    const progress = getAllModuleProgress(user.id);
    const monthly = getMonthlyData(user.id);

    const monthLabels = [];
    const monthData = [];
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
        const label = d.toLocaleDateString('id-ID', { month: 'short' });
        monthLabels.push(label);
        monthData.push(monthly[key] || 0);
    }

    function getStatus(moduleId) {
        const p = progress[moduleId];
        if (!p) return 'not-started';
        return p.status || 'not-started';
    }

    function getStatusLabel(status) {
        switch (status) {
            case 'in-progress': return 'Sedang Dikerjakan';
            case 'completed': return 'Selesai & Lulus';
            case 'failed': return 'Selesai (Skor < 70)';
            default: return 'Belum Dibuka';
        }
    }

    const allCompleted = stats.completed + stats.failed === 20 && stats.failed === 0;

    return (
        <div>
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#1B2A4A', letterSpacing: '-0.02em' }}>
                    Selamat Datang, {user.name.split(' ')[0]} 👋
                </h1>
                <p style={{ color: '#6B7280', marginTop: '4px' }}>Dashboard Pembelajaran Manajemen Risiko</p>
            </div>

            {allCompleted && (
                <div className="completion-badge">
                    <div className="completion-badge-icon">🏆</div>
                    <h3>Risk Learning Completed — {now.getFullYear()}</h3>
                    <p>Selamat! Anda telah menyelesaikan seluruh 20 modul pembelajaran manajemen risiko.</p>
                </div>
            )}

            <div className="stats-grid">
                <div className="stat-card accent">
                    <div className="stat-card-label">Risk Literacy Score</div>
                    <div className="stat-card-value">{stats.riskLiteracyScore}</div>
                    <div className="stat-card-sub">dari 100 poin</div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-label">Completion Rate</div>
                    <div className="stat-card-value">{stats.completionRate}%</div>
                    <div className="stat-card-sub">{stats.completed + stats.failed} dari {stats.total} modul</div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-label">Rata-rata Skor Kuis</div>
                    <div className="stat-card-value">{stats.avgScore}</div>
                    <div className="stat-card-sub">dari 100 poin</div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-label">Status</div>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
                        <span className="badge badge-info">📘 {20 - (stats.completed + stats.failed + stats.inProgress)} Belum</span>
                        <span className="badge badge-warning">📝 {stats.inProgress} Progress</span>
                        <span className="badge badge-success">✅ {stats.passed} Lulus</span>
                        {stats.failed > 0 && <span className="badge badge-danger">❌ {stats.failed} Gagal</span>}
                    </div>
                </div>
            </div>

            {/* Module Grid */}
            {MODULE_GROUPS.map(group => (
                <div key={group.name} style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>{group.name}</h3>
                    <div className="module-grid">
                        {group.ids.map(id => {
                            const mod = MODULES.find(m => m.id === id);
                            if (!mod) return null;
                            const status = getStatus(id);
                            return (
                                <Link to={`/module/${id}`} key={id} className={`module-btn status-${status}`} title={getStatusLabel(status)}>
                                    <span className="module-btn-status" />
                                    <span className="module-btn-number">{String(id).padStart(2, '0')}</span>
                                    <span className="module-btn-title">{mod.title}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            ))}

            {/* Monthly Chart */}
            <div className="card" style={{ marginTop: '16px' }}>
                <div className="card-header">
                    <span className="card-title">Modul Selesai per Bulan</span>
                </div>
                <BarChart data={monthData} labels={monthLabels} height={200} />
            </div>

            {/* Progress bar */}
            <div className="card" style={{ marginTop: '16px' }}>
                <div className="card-header">
                    <span className="card-title">Progress Keseluruhan</span>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#2563EB' }}>{stats.completionRate}%</span>
                </div>
                <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{ width: `${stats.completionRate}%` }} />
                </div>
                <p style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '8px' }}>
                    Risk Literacy Score = 60% Rata-rata Skor ({stats.avgScore}) + 40% Completion Rate ({stats.completionRate}%) = <strong>{stats.riskLiteracyScore}</strong>
                </p>
            </div>
        </div>
    );
}
