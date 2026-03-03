import { MODULES as M1 } from './modules1.js';
import { MODULES_2 as M2 } from './modules2.js';
import { MODULES_3 as M3 } from './modules3.js';
import { MODULES_4 as M4 } from './modules4.js';
import { getModuleCustomization } from './store.js';

export const MODULES = [...M1, ...M2, ...M3, ...M4];

export function getModuleById(id) {
    const mod = MODULES.find(m => m.id === parseInt(id));
    if (!mod) return null;
    const custom = getModuleCustomization(mod.id);
    if (custom) {
        return { ...mod, videoUrl: custom.videoUrl || mod.videoUrl, description: custom.description || mod.description };
    }
    return mod;
}

export function getModulesByModule(moduleName) {
    return MODULES.filter(m => m.module === moduleName);
}

export const MODULE_GROUPS = [
    { name: 'Modul 1: Fondasi dan Tata Kelola Risiko', ids: [1, 2, 3, 4] },
    { name: 'Modul 2: Strategi, Konteks, dan Parameter Risiko', ids: [5, 6, 7] },
    { name: 'Modul 3: Proses Penilaian Risiko', ids: [8, 9, 10, 11, 12] },
    { name: 'Modul 4: Perlakuan dan Konsolidasi Risiko', ids: [13, 14, 15] },
    { name: 'Modul 5: Budaya, Pemantauan, dan Keberlanjutan', ids: [16, 17, 18, 19, 20] },
];
