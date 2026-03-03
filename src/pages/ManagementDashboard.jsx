import { useState } from 'react';
import { MODULES } from '../data/modules.js';
import { USERS, UNITS } from '../data/users.js';
import { getUserStats, getUnitStats, getAllReflections, exportToCSV } from '../data/store.js';
import { BarChart } from '../components/Chart.jsx';

export default function ManagementDashboard() {
    const [selectedUnit, setSelectedUnit] = useState(null);

    const unitStats = UNITS.map(u => ({
        ...u,
        ...getUnitStats(u.id, USERS),
    }));

    const unitsBelow70 = unitStats.filter(u => u.avgScore > 0 && u.avgScore < 70);

    // Module scores across all users
    const moduleScores = MODULES.map(m => {
        const scores = USERS.filter(u => u.role === 'user').map(u => {
            const p = getUserStats(u.id);
            return null; // simplified
        });
        return { id: m.id, title: m.title, avgScore: 0 };
    });

    const completionData = unitStats.map(u => u.avgCompletion);
    const completionLabels = unitStats.map(u => u.name.replace('Divisi ', ''));
    const scoreData = unitStats.map(u => u.avgScore);

    return (
        <div>
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#1B2A4A' }}>Dashboard Manajemen</h1>
                <p style={{ color: '#6B7280', marginTop: '4px' }}>Visibilitas pembelajaran risiko seluruh organisasi</p>
            </div>

            {/* Summary Stats */}
            <div className="stats-grid">
                <div className="stat-card accent">
                    <div className="stat-card-label">Total Karyawan</div>
                    <div className="stat-card-value">{USERS.filter(u => u.role === 'user').length}</div>
                    <div className="stat-card-sub">terdaftar dalam LMS</div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-label">Rata-rata Completion</div>
                    <div className="stat-card-value">
                        {unitStats.length > 0 ? Math.round(unitStats.reduce((a, u) => a + u.avgCompletion, 0) / unitStats.length) : 0}%
                    </div>
                    <div className="stat-card-sub">seluruh unit</div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-label">Rata-rata Skor</div>
                    <div className="stat-card-value">
                        {unitStats.length > 0 ? Math.round(unitStats.reduce((a, u) => a + u.avgScore, 0) / unitStats.length) : 0}
                    </div>
                    <div className="stat-card-sub">seluruh unit</div>
                </div>
                <div className="stat-card">
                    <div className="stat-card-label">Unit Skor {'<'} 70</div>
                    <div className="stat-card-value" style={{ color: unitsBelow70.length > 0 ? '#EF4444' : '#10B981' }}>
                        {unitsBelow70.length}
                    </div>
                    <div className="stat-card-sub">perlu perhatian</div>
                </div>
            </div>

            {/* Charts */}
            <div className="dashboard-grid">
                <div className="card">
                    <div className="card-header"><span className="card-title">Completion Rate per Unit (%)</span></div>
                    <BarChart data={completionData} labels={completionLabels} height={220} />
                </div>
                <div className="card">
                    <div className="card-header"><span className="card-title">Rata-rata Skor per Unit</span></div>
                    <BarChart data={scoreData} labels={completionLabels} height={220} colors={scoreData.map(s => s < 70 && s > 0 ? '#EF4444' : '#2563EB')} />
                </div>
            </div>

            {/* Unit Table */}
            <div className="card" style={{ marginTop: '24px' }}>
                <div className="card-header">
                    <span className="card-title">Detail per Unit/Divisi</span>
                    <button className="btn btn-sm btn-secondary" onClick={() => exportToCSV(USERS)}>📥 Export CSV</button>
                </div>
                <div className="table-wrapper">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Unit/Divisi</th>
                                <th>Divisi</th>
                                <th>Jumlah User</th>
                                <th>Avg Completion</th>
                                <th>Avg Skor</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {unitStats.map(u => (
                                <tr key={u.id}>
                                    <td style={{ fontWeight: 600 }}>{u.name}</td>
                                    <td>{u.division}</td>
                                    <td>{u.userCount}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div className="progress-bar-track" style={{ width: '80px', height: '6px' }}>
                                                <div className="progress-bar-fill" style={{ width: `${u.avgCompletion}%` }} />
                                            </div>
                                            <span>{u.avgCompletion}%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span style={{ fontWeight: 600, color: u.avgScore > 0 && u.avgScore < 70 ? '#EF4444' : '#374151' }}>{u.avgScore}</span>
                                    </td>
                                    <td>
                                        {u.avgScore === 0 ? (
                                            <span className="badge badge-info">Belum mulai</span>
                                        ) : u.avgScore < 70 ? (
                                            <span className="badge badge-danger">⚠️ Perlu Perhatian</span>
                                        ) : (
                                            <span className="badge badge-success">✅ Baik</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Alerts */}
            {unitsBelow70.length > 0 && (
                <div className="card" style={{ marginTop: '24px', borderColor: '#FCA5A5', background: '#FEF2F2' }}>
                    <div className="card-header"><span className="card-title" style={{ color: '#991B1B' }}>⚠️ Unit dengan Skor di Bawah 70</span></div>
                    {unitsBelow70.map(u => (
                        <div key={u.id} style={{ padding: '8px 0', borderBottom: '1px solid #FEE2E2', display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ fontWeight: 600 }}>{u.name}</span>
                            <span className="badge badge-danger">Skor: {u.avgScore}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
