export const UNITS = [
    { id: 'unit-1', name: 'Divisi Operasi', division: 'Direktorat Operasi' },
    { id: 'unit-2', name: 'Divisi Pemeliharaan', division: 'Direktorat Operasi' },
    { id: 'unit-3', name: 'Divisi Keuangan', division: 'Direktorat Keuangan & SDM' },
    { id: 'unit-4', name: 'Divisi SDM', division: 'Direktorat Keuangan & SDM' },
    { id: 'unit-5', name: 'Divisi Perencanaan', division: 'Direktorat Perencanaan & Niaga' },
    { id: 'unit-6', name: 'Divisi Niaga', division: 'Direktorat Perencanaan & Niaga' },
    { id: 'unit-7', name: 'Divisi K3L', division: 'Direktorat Operasi' },
];

export const USERS = [
    { id: 'user-1', username: 'budi.santoso', password: 'mkp2026', name: 'Budi Santoso', unitId: 'unit-1', role: 'user' },
    { id: 'user-2', username: 'siti.rahayu', password: 'mkp2026', name: 'Siti Rahayu', unitId: 'unit-2', role: 'user' },
    { id: 'user-3', username: 'ahmad.hidayat', password: 'mkp2026', name: 'Ahmad Hidayat', unitId: 'unit-3', role: 'user' },
    { id: 'user-4', username: 'dewi.lestari', password: 'mkp2026', name: 'Dewi Lestari', unitId: 'unit-4', role: 'user' },
    { id: 'user-5', username: 'rudi.hartono', password: 'mkp2026', name: 'Rudi Hartono', unitId: 'unit-5', role: 'user' },
    { id: 'user-6', username: 'admin', password: 'admin2026', name: 'Administrator', unitId: 'unit-1', role: 'admin' },
    { id: 'user-7', username: 'manajemen', password: 'mgmt2026', name: 'Direktur Utama', unitId: 'unit-1', role: 'management' },
];

export function getUserById(id) {
    return USERS.find(u => u.id === id);
}

export function getUnitById(id) {
    return UNITS.find(u => u.id === id);
}

export function getUsersByUnit(unitId) {
    return USERS.filter(u => u.unitId === unitId && u.role === 'user');
}
