const STORAGE_KEY = 'lms_mkp_data';

function getData() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
}

function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function ensureUser(userId) {
    const data = getData();
    if (!data[userId]) data[userId] = { modules: {} };
    saveData(data);
    return data;
}

export function getModuleProgress(userId, moduleId) {
    const data = ensureUser(userId);
    return data[userId]?.modules?.[moduleId] || { status: 'not-started', quizScore: null, quizAnswers: null, reflection: '', actionCommitment: '', completedAt: null, startedAt: null };
}

export function getAllModuleProgress(userId) {
    const data = ensureUser(userId);
    return data[userId]?.modules || {};
}

export function startModule(userId, moduleId) {
    const data = ensureUser(userId);
    if (!data[userId].modules[moduleId]) {
        data[userId].modules[moduleId] = { status: 'in-progress', quizScore: null, quizAnswers: null, reflection: '', actionCommitment: '', startedAt: new Date().toISOString(), completedAt: null };
    } else if (data[userId].modules[moduleId].status === 'not-started') {
        data[userId].modules[moduleId].status = 'in-progress';
        data[userId].modules[moduleId].startedAt = new Date().toISOString();
    }
    saveData(data);
}

export function saveQuizResult(userId, moduleId, score, answers) {
    const data = ensureUser(userId);
    if (!data[userId].modules[moduleId]) {
        data[userId].modules[moduleId] = { status: 'in-progress', startedAt: new Date().toISOString(), completedAt: null, reflection: '', actionCommitment: '' };
    }
    data[userId].modules[moduleId].quizScore = score;
    data[userId].modules[moduleId].quizAnswers = answers;
    saveData(data);
}

export function saveReflection(userId, moduleId, text) {
    const data = ensureUser(userId);
    if (!data[userId].modules[moduleId]) {
        data[userId].modules[moduleId] = { status: 'in-progress', startedAt: new Date().toISOString(), completedAt: null, quizScore: null, quizAnswers: null, actionCommitment: '' };
    }
    data[userId].modules[moduleId].reflection = text;
    saveData(data);
}

export function saveActionCommitment(userId, moduleId, choice) {
    const data = ensureUser(userId);
    if (!data[userId].modules[moduleId]) {
        data[userId].modules[moduleId] = { status: 'in-progress', startedAt: new Date().toISOString(), completedAt: null, quizScore: null, quizAnswers: null, reflection: '' };
    }
    data[userId].modules[moduleId].actionCommitment = choice;
    saveData(data);
}

export function completeModule(userId, moduleId) {
    const data = ensureUser(userId);
    const mod = data[userId].modules[moduleId];
    if (mod) {
        mod.status = mod.quizScore >= 70 ? 'completed' : 'failed';
        mod.completedAt = new Date().toISOString();
    }
    saveData(data);
}

export function getUserStats(userId) {
    const data = ensureUser(userId);
    const modules = data[userId]?.modules || {};
    const entries = Object.values(modules);
    const total = 20;
    const completed = entries.filter(m => m.status === 'completed' || m.status === 'failed').length;
    const completionRate = total > 0 ? (completed / total) * 100 : 0;
    const scores = entries.filter(m => m.quizScore !== null).map(m => m.quizScore);
    const avgScore = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
    const riskLiteracyScore = Math.round((avgScore * 0.6) + (completionRate * 0.4));
    return { completed, total, completionRate: Math.round(completionRate), avgScore: Math.round(avgScore), riskLiteracyScore, inProgress: entries.filter(m => m.status === 'in-progress').length, passed: entries.filter(m => m.status === 'completed').length, failed: entries.filter(m => m.status === 'failed').length };
}

export function getUnitStats(unitId, usersList) {
    const unitUsers = usersList.filter(u => u.unitId === unitId && u.role === 'user');
    if (unitUsers.length === 0) return { avgScore: 0, avgCompletion: 0, userCount: 0 };
    const stats = unitUsers.map(u => getUserStats(u.id));
    return {
        userCount: unitUsers.length,
        avgScore: Math.round(stats.reduce((a, s) => a + s.avgScore, 0) / stats.length),
        avgCompletion: Math.round(stats.reduce((a, s) => a + s.completionRate, 0) / stats.length),
        usersBelow70: stats.filter(s => s.avgScore > 0 && s.avgScore < 70).length,
    };
}

export function getAllReflections() {
    const data = getData();
    const results = [];
    Object.entries(data).forEach(([userId, userData]) => {
        Object.entries(userData.modules || {}).forEach(([moduleId, mod]) => {
            if (mod.reflection) {
                results.push({ userId, moduleId: parseInt(moduleId), reflection: mod.reflection, date: mod.completedAt || mod.startedAt });
            }
        });
    });
    return results;
}

export function getMonthlyData(userId) {
    const data = ensureUser(userId);
    const modules = data[userId]?.modules || {};
    const months = {};
    Object.values(modules).forEach(m => {
        if (m.completedAt) {
            const d = new Date(m.completedAt);
            const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
            months[key] = (months[key] || 0) + 1;
        }
    });
    return months;
}

export function exportToCSV(usersList) {
    const rows = [['Nama', 'Unit', 'Completion %', 'Avg Score', 'Risk Literacy Score', 'Status']];
    usersList.filter(u => u.role === 'user').forEach(u => {
        const s = getUserStats(u.id);
        rows.push([u.name, u.unitId, s.completionRate + '%', s.avgScore, s.riskLiteracyScore, s.completionRate === 100 ? 'Selesai' : 'Belum']);
    });
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lms_report_mkp.csv';
    a.click();
    URL.revokeObjectURL(url);
}

export function resetAllData() {
    localStorage.removeItem(STORAGE_KEY);
}

// Admin module customizations (video URL, description overrides)
const ADMIN_STORAGE_KEY = 'lms_mkp_admin';

function getAdminData() {
    try {
        const raw = localStorage.getItem(ADMIN_STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
}

function saveAdminData(data) {
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(data));
}

export function saveModuleCustomization(moduleId, updates) {
    const data = getAdminData();
    data[moduleId] = { ...(data[moduleId] || {}), ...updates, updatedAt: new Date().toISOString() };
    saveAdminData(data);
}

export function getModuleCustomization(moduleId) {
    const data = getAdminData();
    return data[moduleId] || null;
}

export function getAllModuleCustomizations() {
    return getAdminData();
}
