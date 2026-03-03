import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { getModuleById } from '../data/modules.js';
import { getModuleProgress, startModule, saveQuizResult, saveReflection, saveActionCommitment, completeModule } from '../data/store.js';
import QuizEngine from '../components/QuizEngine.jsx';

// Convert any YouTube URL to embed format
function toEmbedUrl(url) {
    if (!url) return '';
    let videoId = '';
    // youtu.be/VIDEO_ID
    const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (shortMatch) videoId = shortMatch[1];
    // youtube.com/watch?v=VIDEO_ID
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (watchMatch) videoId = watchMatch[1];
    // youtube.com/embed/VIDEO_ID (already correct)
    const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
    if (embedMatch) return `https://www.youtube.com/embed/${embedMatch[1]}`;
    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    return url; // return as-is if not recognized
}

const ACTION_OPTIONS = [
    'Saya memahami dan siap menerapkan prinsip ini',
    'Saya perlu diskusi lebih lanjut dengan atasan',
    'Topik ini relevan untuk unit saya',
];

export default function ModulePage() {
    const { id } = useParams();
    const { user } = useAuth();

    const [mod, setMod] = useState(null);
    const [reflection, setReflection] = useState('');
    const [action, setAction] = useState('');
    const [quizDone, setQuizDone] = useState(false);
    const [quizScore, setQuizScore] = useState(null);
    const [reflectionSaved, setReflectionSaved] = useState(false);
    const [moduleCompleted, setModuleCompleted] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const foundMod = getModuleById(id);
            setMod(foundMod);
            if (foundMod && user) {
                startModule(user.id, foundMod.id);
                const p = getModuleProgress(user.id, foundMod.id) || {};
                setReflection(p.reflection || '');
                setAction(p.actionCommitment || '');
                setQuizScore(p.quizScore != null ? p.quizScore : null);
                setQuizDone(p.quizScore != null);
                setReflectionSaved(!!p.reflection);
                setModuleCompleted(p.status === 'completed' || p.status === 'failed');
            }
        } catch (err) {
            console.error('ModulePage init error:', err);
            setError(err.message);
        }
        window.scrollTo(0, 0);
    }, [id]);

    if (error) {
        return (
            <div style={{ padding: '60px', textAlign: 'center' }}>
                <h2>Error</h2>
                <p style={{ color: 'red' }}>{error}</p>
                <Link to="/dashboard" className="btn btn-primary" style={{ marginTop: '16px' }}>Kembali ke Dashboard</Link>
            </div>
        );
    }

    if (!mod) {
        return (
            <div style={{ padding: '60px', textAlign: 'center' }}>
                <h2>Memuat modul...</h2>
                <Link to="/dashboard" className="btn btn-primary" style={{ marginTop: '16px' }}>Kembali ke Dashboard</Link>
            </div>
        );
    }

    function handleQuizComplete(score, answers) {
        if (!user) return;
        saveQuizResult(user.id, mod.id, score, answers);
        setQuizDone(true);
        setQuizScore(score);
    }

    function handleSaveReflection() {
        if (!user || reflection.trim().length < 10) return;
        saveReflection(user.id, mod.id, reflection);
        setReflectionSaved(true);
    }

    function handleActionSelect(opt) {
        if (!user) return;
        setAction(opt);
        saveActionCommitment(user.id, mod.id, opt);
    }

    function handleComplete() {
        if (!user) return;
        completeModule(user.id, mod.id);
        setModuleCompleted(true);
        const p = getModuleProgress(user.id, mod.id) || {};
        setQuizScore(p.quizScore != null ? p.quizScore : null);
    }

    const canComplete = quizDone && reflectionSaved && action;
    const prevId = mod.id > 1 ? mod.id - 1 : null;
    const nextId = mod.id < 20 ? mod.id + 1 : null;

    return (
        <div className="module-page">
            <div className="module-page-header">
                <Link to="/dashboard" style={{ fontSize: '14px', color: '#6B7280', display: 'inline-flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>← Kembali ke Dashboard</Link>
                <div className="module-number">Topik {mod.id} — {mod.module}</div>
                <h1>{mod.title}</h1>
                <p className="module-desc">{mod.description}</p>
                {quizScore != null && (
                    <div style={{ marginTop: '12px' }}>
                        <span className={`badge ${quizScore >= 70 ? 'badge-success' : 'badge-danger'}`}>Skor Kuis: {quizScore}</span>
                    </div>
                )}
            </div>

            {/* A. Video */}
            <div style={{ marginBottom: '40px' }}>
                <div className="section-header">
                    <div className="section-header-icon video">🎬</div>
                    <div><h2>Video Materi</h2><p>Tonton video pembelajaran (5-15 menit)</p></div>
                </div>
                <div className="video-container">
                    {mod.videoUrl ? (
                        <iframe src={toEmbedUrl(mod.videoUrl)} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={mod.title} />
                    ) : (
                        <div className="video-placeholder">
                            <div className="video-placeholder-icon">▶️</div>
                            <p>Video materi akan tersedia segera</p>
                            <p style={{ fontSize: '12px', color: '#6B7280' }}>Topik: {mod.title}</p>
                        </div>
                    )}
                </div>
            </div>

            <hr className="section-divider" />

            {/* B. Article */}
            <div style={{ marginBottom: '40px' }}>
                <div className="section-header">
                    <div className="section-header-icon article">📄</div>
                    <div><h2>Materi Artikel</h2><p>Baca materi pembelajaran (5-7 menit)</p></div>
                </div>
                <div className="article-content" dangerouslySetInnerHTML={{ __html: mod.article || '' }} />
            </div>

            <hr className="section-divider" />

            {/* C. Reality Check */}
            {mod.realityCheck && (
                <div style={{ marginBottom: '40px' }}>
                    <div className="section-header">
                        <div className="section-header-icon reality">🔍</div>
                        <div><h2>Reality Check</h2><p>Studi kasus nyata untuk kontekstualisasi</p></div>
                    </div>
                    <div className="reality-check">
                        <div className="reality-check-label">📋 Studi Kasus</div>
                        <div className="reality-check-case">{mod.realityCheck.case}</div>
                        <div className="reality-check-question">❓ {mod.realityCheck.question}</div>
                    </div>
                </div>
            )}

            <hr className="section-divider" />

            {/* D. Knowledge Check */}
            {mod.quiz && mod.quiz.length > 0 && (
                <div style={{ marginBottom: '40px' }}>
                    <div className="section-header">
                        <div className="section-header-icon quiz">📝</div>
                        <div><h2>Knowledge Check</h2><p>5 pertanyaan untuk menguji pemahaman</p></div>
                    </div>
                    <QuizEngine questions={mod.quiz} onComplete={handleQuizComplete} previousScore={quizScore} />
                </div>
            )}

            <hr className="section-divider" />

            {/* E. Reflection */}
            <div style={{ marginBottom: '40px' }}>
                <div className="section-header">
                    <div className="section-header-icon reflect">💭</div>
                    <div><h2>Risk Reflection</h2><p>Refleksi berbasis pekerjaan (wajib diisi)</p></div>
                </div>
                <div className="reflection-box">
                    <p style={{ fontWeight: 600, color: '#065F46', marginBottom: '12px', fontSize: '14px' }}>{mod.reflectionQuestion || 'Tuliskan refleksi Anda tentang topik ini.'}</p>
                    <textarea className="form-textarea" value={reflection} onChange={e => setReflection(e.target.value)} placeholder="Tulis refleksi Anda (minimal 2-5 kalimat)..." rows={5} disabled={reflectionSaved} />
                    {!reflectionSaved ? (
                        <button className="btn btn-success" style={{ marginTop: '12px' }} onClick={handleSaveReflection} disabled={reflection.trim().length < 10}>💾 Simpan Refleksi</button>
                    ) : (
                        <p style={{ color: '#059669', marginTop: '8px', fontSize: '14px', fontWeight: 600 }}>✅ Refleksi tersimpan</p>
                    )}
                </div>
            </div>

            <hr className="section-divider" />

            {/* F. Action Commitment */}
            <div style={{ marginBottom: '40px' }}>
                <div className="section-header">
                    <div className="section-header-icon action">🎯</div>
                    <div><h2>Action Commitment</h2><p>Pilih komitmen tindak lanjut Anda</p></div>
                </div>
                {ACTION_OPTIONS.map((opt, i) => (
                    <div key={i} className={`action-option ${action === opt ? 'selected' : ''}`} onClick={() => handleActionSelect(opt)}>
                        <input type="radio" name="action" checked={action === opt} readOnly />
                        <span>{opt}</span>
                    </div>
                ))}
            </div>

            <hr className="section-divider" />

            {/* Complete Module */}
            {!moduleCompleted ? (
                <div style={{ textAlign: 'center', padding: '24px' }}>
                    <button className="btn btn-navy btn-lg" onClick={handleComplete} disabled={!canComplete} style={{ minWidth: '300px' }}>
                        {canComplete ? '✅ Selesaikan Modul' : '🔒 Selesaikan semua bagian untuk menyelesaikan modul'}
                    </button>
                    {!canComplete && (
                        <p style={{ color: '#9CA3AF', fontSize: '12px', marginTop: '8px' }}>
                            {!quizDone && '⬜ Kuis belum dikerjakan. '}
                            {!reflectionSaved && '⬜ Refleksi belum disimpan. '}
                            {!action && '⬜ Action commitment belum dipilih.'}
                        </p>
                    )}
                </div>
            ) : (
                <div className={`quiz-result ${quizScore >= 70 ? 'pass' : 'fail'}`} style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '40px', marginBottom: '8px' }}>{quizScore >= 70 ? '🎉' : '📚'}</div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700 }}>Modul Selesai!</h3>
                    <p style={{ color: '#6B7280', marginTop: '4px' }}>Skor Kuis: {quizScore} — {quizScore >= 70 ? 'Lulus' : 'Disarankan untuk mengulang materi'}</p>
                </div>
            )}

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #E5E7EB' }}>
                {prevId ? <Link to={`/module/${prevId}`} className="btn btn-secondary">← Topik {prevId}</Link> : <div />}
                <Link to="/dashboard" className="btn btn-secondary">Dashboard</Link>
                {nextId ? <Link to={`/module/${nextId}`} className="btn btn-primary">Topik {nextId} →</Link> : <div />}
            </div>
        </div>
    );
}
