import { useState } from 'react';
import { MODULES } from '../data/modules.js';
import { USERS, UNITS, getUnitById } from '../data/users.js';
import { getUserStats, getUnitStats, getAllReflections, exportToCSV } from '../data/store.js';

const TABS = ['Modul', 'Refleksi User', 'Ranking Unit', 'Export'];

export default function AdminPanel() {
    const [activeTab, setActiveTab] = useState('Modul');
    const [selectedModule, setSelectedModule] = useState(null);

    return (
        <div>
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#1B2A4A' }}>Admin Panel</h1>
                <p style={{ color: '#6B7280', marginTop: '4px' }}>Kelola konten dan monitor pembelajaran</p>
            </div>

            <div className="tabs">
                {TABS.map(tab => (
                    <button key={tab} className={`tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
                ))}
            </div>

            {activeTab === 'Modul' && <ModulesTab selectedModule={selectedModule} setSelectedModule={setSelectedModule} />}
            {activeTab === 'Refleksi User' && <ReflectionsTab />}
            {activeTab === 'Ranking Unit' && <RankingTab />}
            {activeTab === 'Export' && <ExportTab />}
        </div>
    );
}

function ModulesTab({ selectedModule, setSelectedModule }) {
    if (selectedModule) {
        const mod = MODULES.find(m => m.id === selectedModule);
        return (
            <div>
                <button className="btn btn-secondary btn-sm" onClick={() => setSelectedModule(null)} style={{ marginBottom: '16px' }}>← Kembali</button>
                <div className="card">
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1B2A4A', marginBottom: '16px' }}>Topik {mod.id}: {mod.title}</h3>
                    <div className="form-group">
                        <label className="form-label">Judul</label>
                        <input className="form-input" defaultValue={mod.title} readOnly />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Deskripsi</label>
                        <textarea className="form-textarea" defaultValue={mod.description} readOnly />
                    </div>
                    <div className="form-group">
                        <label className="form-label">URL Video</label>
                        <input className="form-input" defaultValue={mod.videoUrl || ''} placeholder="Masukkan URL video YouTube/embed" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Konten Artikel (HTML)</label>
                        <textarea className="form-textarea" defaultValue={mod.article} style={{ minHeight: '200px', fontFamily: 'monospace', fontSize: '12px' }} readOnly />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Quiz Questions ({mod.quiz.length})</label>
                        {mod.quiz.map((q, i) => (
                            <div key={q.id} style={{ padding: '12px', background: '#F9FAFB', borderRadius: '8px', marginBottom: '8px' }}>
                                <p style={{ fontWeight: 600, fontSize: '13px' }}>Q{i + 1}: {q.question}</p>
                                <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px' }}>
                                    {q.options.map((o, oi) => <div key={oi} style={{ color: oi === q.correct ? '#059669' : '#6B7280' }}>{oi === q.correct ? '✅' : '⬜'} {o}</div>)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: '12px', color: '#9CA3AF' }}>Catatan: Untuk mengubah konten, edit file sumber data secara langsung. Fitur editing penuh akan tersedia di versi berikutnya.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="table-wrapper">
            <table className="data-table">
                <thead>
                    <tr><th>#</th><th>Judul Topik</th><th>Modul</th><th>Quiz</th><th>Aksi</th></tr>
                </thead>
                <tbody>
                    {MODULES.map(m => (
                        <tr key={m.id}>
                            <td style={{ fontWeight: 700 }}>{m.id}</td>
                            <td>{m.title}</td>
                            <td style={{ fontSize: '12px', color: '#6B7280' }}>{m.module}</td>
                            <td>{m.quiz.length} soal</td>
                            <td><button className="btn btn-sm btn-secondary" onClick={() => setSelectedModule(m.id)}>Lihat Detail</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ReflectionsTab() {
    const reflections = getAllReflections();
    const users = USERS.reduce((acc, u) => ({ ...acc, [u.id]: u }), {});

    return (
        <div>
            <p style={{ color: '#6B7280', marginBottom: '16px', fontSize: '14px' }}>{reflections.length} refleksi ditemukan</p>
            {reflections.length === 0 ? (
                <div className="card text-center" style={{ padding: '40px', color: '#9CA3AF' }}>Belum ada refleksi yang disubmit.</div>
            ) : (
                reflections.map((r, i) => (
                    <div key={i} className="card" style={{ marginBottom: '12px' }}>
                        <div className="flex-between" style={{ marginBottom: '8px' }}>
                            <span style={{ fontWeight: 600, fontSize: '14px' }}>{users[r.userId]?.name || r.userId}</span>
                            <span className="badge badge-info">Topik {r.moduleId}</span>
                        </div>
                        <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.6' }}>{r.reflection}</p>
                        <p style={{ color: '#9CA3AF', fontSize: '12px', marginTop: '8px' }}>{r.date ? new Date(r.date).toLocaleDateString('id-ID') : '-'}</p>
                    </div>
                ))
            )}
        </div>
    );
}

function RankingTab() {
    const unitStats = UNITS.map(u => ({
        ...u,
        ...getUnitStats(u.id, USERS),
    })).sort((a, b) => b.avgScore - a.avgScore);

    return (
        <div className="table-wrapper">
            <table className="data-table">
                <thead>
                    <tr><th>Rank</th><th>Unit</th><th>Divisi</th><th>Avg Skor</th><th>Completion</th><th>Users</th></tr>
                </thead>
                <tbody>
                    {unitStats.map((u, i) => (
                        <tr key={u.id}>
                            <td style={{ fontWeight: 700, fontSize: '18px', color: i === 0 ? '#F59E0B' : '#374151' }}>{i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}</td>
                            <td style={{ fontWeight: 600 }}>{u.name}</td>
                            <td>{u.division}</td>
                            <td><span style={{ fontWeight: 600, color: u.avgScore > 0 && u.avgScore < 70 ? '#EF4444' : '#374151' }}>{u.avgScore}</span></td>
                            <td>{u.avgCompletion}%</td>
                            <td>{u.userCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ExportTab() {
    const userStats = USERS.filter(u => u.role === 'user').map(u => {
        const s = getUserStats(u.id);
        const unit = getUnitById(u.unitId);
        return { ...u, ...s, unitName: unit?.name || '-' };
    });

    return (
        <div>
            <div className="card" style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1B2A4A', marginBottom: '12px' }}>Export Data Pembelajaran</h3>
                <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '16px' }}>Download data pembelajaran seluruh karyawan dalam format CSV.</p>
                <button className="btn btn-primary" onClick={() => exportToCSV(USERS)}>📥 Download CSV</button>
            </div>

            <div className="card">
                <div className="card-header"><span className="card-title">Preview Data</span></div>
                <div className="table-wrapper">
                    <table className="data-table">
                        <thead>
                            <tr><th>Nama</th><th>Unit</th><th>Completion</th><th>Avg Skor</th><th>Risk Literacy</th></tr>
                        </thead>
                        <tbody>
                            {userStats.map(u => (
                                <tr key={u.id}>
                                    <td style={{ fontWeight: 600 }}>{u.name}</td>
                                    <td>{u.unitName}</td>
                                    <td>{u.completionRate}%</td>
                                    <td>{u.avgScore}</td>
                                    <td><span style={{ fontWeight: 700, color: '#2563EB' }}>{u.riskLiteracyScore}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
