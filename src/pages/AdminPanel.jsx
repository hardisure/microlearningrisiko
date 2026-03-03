import { useState } from 'react';
import { MODULES, getModuleById } from '../data/modules.js';
import { USERS, UNITS, getUnitById } from '../data/users.js';
import { getUserStats, getUnitStats, getAllReflections, exportToCSV, saveModuleCustomization, getModuleCustomization } from '../data/store.js';

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
    const [videoUrl, setVideoUrl] = useState('');
    const [description, setDescription] = useState('');
    const [saved, setSaved] = useState(false);
    const [editingId, setEditingId] = useState(null);

    function openModule(id) {
        const mod = getModuleById(id);
        const custom = getModuleCustomization(id);
        setVideoUrl(custom?.videoUrl || mod.videoUrl || '');
        setDescription(custom?.description || mod.description || '');
        setEditingId(id);
        setSaved(false);
        setSelectedModule(id);
    }

    function handleSave() {
        if (!editingId) return;
        saveModuleCustomization(editingId, { videoUrl: videoUrl.trim(), description: description.trim() });
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    }

    function handleBack() {
        setSelectedModule(null);
        setEditingId(null);
        setSaved(false);
    }

    if (selectedModule) {
        const mod = MODULES.find(m => m.id === selectedModule);
        if (!mod) return <p>Modul tidak ditemukan.</p>;
        return (
            <div>
                <button className="btn btn-secondary btn-sm" onClick={handleBack} style={{ marginBottom: '16px' }}>← Kembali</button>
                <div className="card">
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1B2A4A', marginBottom: '16px' }}>Topik {mod.id}: {mod.title}</h3>
                    <div className="form-group">
                        <label className="form-label">Judul</label>
                        <input className="form-input" defaultValue={mod.title} readOnly style={{ background: '#F3F4F6' }} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Deskripsi</label>
                        <textarea className="form-textarea" value={description} onChange={e => { setDescription(e.target.value); setSaved(false); }} rows={3} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">URL Video</label>
                        <input className="form-input" value={videoUrl} onChange={e => { setVideoUrl(e.target.value); setSaved(false); }} placeholder="Masukkan URL video YouTube embed (contoh: https://www.youtube.com/embed/xxxxx)" />
                        <p style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}>💡 Gunakan format embed YouTube: https://www.youtube.com/embed/VIDEO_ID</p>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Konten Artikel (HTML)</label>
                        <textarea className="form-textarea" defaultValue={mod.article} style={{ minHeight: '200px', fontFamily: 'monospace', fontSize: '12px', background: '#F3F4F6' }} readOnly />
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

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #E5E7EB' }}>
                        <button className="btn btn-primary" onClick={handleSave} style={{ minWidth: '160px' }}>
                            💾 Simpan Perubahan
                        </button>
                        {saved && (
                            <span style={{ color: '#059669', fontWeight: 600, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                ✅ Berhasil disimpan!
                            </span>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="table-wrapper">
            <table className="data-table">
                <thead>
                    <tr><th>#</th><th>Judul Topik</th><th>Modul</th><th>Video</th><th>Quiz</th><th>Aksi</th></tr>
                </thead>
                <tbody>
                    {MODULES.map(m => {
                        const custom = getModuleCustomization(m.id);
                        const hasVideo = !!(custom?.videoUrl || m.videoUrl);
                        return (
                            <tr key={m.id}>
                                <td style={{ fontWeight: 700 }}>{m.id}</td>
                                <td>{m.title}</td>
                                <td style={{ fontSize: '12px', color: '#6B7280' }}>{m.module}</td>
                                <td>{hasVideo ? <span style={{ color: '#059669' }}>✅</span> : <span style={{ color: '#9CA3AF' }}>—</span>}</td>
                                <td>{m.quiz.length} soal</td>
                                <td><button className="btn btn-sm btn-secondary" onClick={() => openModule(m.id)}>Edit</button></td>
                            </tr>
                        );
                    })}
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
